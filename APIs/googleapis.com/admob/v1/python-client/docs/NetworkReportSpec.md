# NetworkReportSpec

The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimension_filters** | [**List[NetworkReportSpecDimensionFilter]**](NetworkReportSpecDimensionFilter.md) | Describes which report rows to match based on their dimension values. | [optional] 
**dimensions** | **List[str]** | List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. | [optional] 
**localization_settings** | [**LocalizationSettings**](LocalizationSettings.md) |  | [optional] 
**max_report_rows** | **int** | Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. | [optional] 
**metrics** | **List[str]** | List of metrics of the report. A report must specify at least one metric. | [optional] 
**sort_conditions** | [**List[NetworkReportSpecSortCondition]**](NetworkReportSpecSortCondition.md) | Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined. | [optional] 
**time_zone** | **str** | A report time zone. Accepts an IANA TZ name values, such as \&quot;America/Los_Angeles.\&quot; If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The \&quot;America/Los_Angeles\&quot; is the only supported value at the moment. | [optional] 

## Example

```python
from openapi_client.models.network_report_spec import NetworkReportSpec

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkReportSpec from a JSON string
network_report_spec_instance = NetworkReportSpec.from_json(json)
# print the JSON string representation of the object
print(NetworkReportSpec.to_json())

# convert the object into a dict
network_report_spec_dict = network_report_spec_instance.to_dict()
# create an instance of NetworkReportSpec from a dict
network_report_spec_from_dict = NetworkReportSpec.from_dict(network_report_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


