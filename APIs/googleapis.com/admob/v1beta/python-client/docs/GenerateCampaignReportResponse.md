# GenerateCampaignReportResponse

Campaign Report API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[ReportRow]**](ReportRow.md) | The campaign report data from the specified publisher. At most 100000 rows will be returned from the API. | [optional] 

## Example

```python
from openapi_client.models.generate_campaign_report_response import GenerateCampaignReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateCampaignReportResponse from a JSON string
generate_campaign_report_response_instance = GenerateCampaignReportResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateCampaignReportResponse.to_json())

# convert the object into a dict
generate_campaign_report_response_dict = generate_campaign_report_response_instance.to_dict()
# create an instance of GenerateCampaignReportResponse from a dict
generate_campaign_report_response_from_dict = GenerateCampaignReportResponse.from_dict(generate_campaign_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


