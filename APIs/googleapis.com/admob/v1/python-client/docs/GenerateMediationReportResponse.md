# GenerateMediationReportResponse

The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ \"header\": { \"date_range\": { \"start_date\": {\"year\": 2018, \"month\": 9, \"day\": 1}, \"end_date\": {\"year\": 2018, \"month\": 9, \"day\": 1} }, \"localization_settings\": { \"currency_code\": \"USD\", \"language_code\": \"en-US\" } } }, { \"row\": { \"dimension_values\": { \"DATE\": {\"value\": \"20180918\"}, \"APP\": { \"value\": \"ca-app-pub-8123415297019784~1001342552\", \"display_label\": \"My app name!\" } }, \"metric_values\": { \"ESTIMATED_EARNINGS\": {\"decimal_value\": \"1324746\"} } } }, { \"footer\": {\"matching_row_count\": 1} }]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footer** | [**ReportFooter**](ReportFooter.md) |  | [optional] 
**header** | [**ReportHeader**](ReportHeader.md) |  | [optional] 
**row** | [**ReportRow**](ReportRow.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_mediation_report_response import GenerateMediationReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMediationReportResponse from a JSON string
generate_mediation_report_response_instance = GenerateMediationReportResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateMediationReportResponse.to_json())

# convert the object into a dict
generate_mediation_report_response_dict = generate_mediation_report_response_instance.to_dict()
# create an instance of GenerateMediationReportResponse from a dict
generate_mediation_report_response_from_dict = GenerateMediationReportResponse.from_dict(generate_mediation_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


