# GenerateCampaignReportRequest

Request to generate campaign report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_spec** | [**CampaignReportSpec**](CampaignReportSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_campaign_report_request import GenerateCampaignReportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateCampaignReportRequest from a JSON string
generate_campaign_report_request_instance = GenerateCampaignReportRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateCampaignReportRequest.to_json())

# convert the object into a dict
generate_campaign_report_request_dict = generate_campaign_report_request_instance.to_dict()
# create an instance of GenerateCampaignReportRequest from a dict
generate_campaign_report_request_from_dict = GenerateCampaignReportRequest.from_dict(generate_campaign_report_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


