# CampaignReportSpec

The specification for generating a Campaign report. For example, the specification to get IMPRESSIONS and CLICKS sliced by CAMPAIGN_ID can look like the following example: { \"date_range\": { \"start_date\": {\"year\": 2021, \"month\": 12, \"day\": 1}, \"end_date\": {\"year\": 2021, \"month\": 12, \"day\": 30} }, \"dimensions\": [\"CAMPAIGN_ID\"], \"metrics\": [\"IMPRESSIONS\", \"CLICKS\"], }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**dimensions** | **List[str]** | List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. | [optional] 
**language_code** | **str** | Language used for any localized text, such as certain applicable dimension values. The language tag is defined in the IETF BCP47. Defaults to &#39;en-US&#39; if unspecified or invalid. | [optional] 
**metrics** | **List[str]** | List of metrics of the report. A report must specify at least one metric. | [optional] 

## Example

```python
from openapi_client.models.campaign_report_spec import CampaignReportSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignReportSpec from a JSON string
campaign_report_spec_instance = CampaignReportSpec.from_json(json)
# print the JSON string representation of the object
print(CampaignReportSpec.to_json())

# convert the object into a dict
campaign_report_spec_dict = campaign_report_spec_instance.to_dict()
# create an instance of CampaignReportSpec from a dict
campaign_report_spec_from_dict = CampaignReportSpec.from_dict(campaign_report_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


