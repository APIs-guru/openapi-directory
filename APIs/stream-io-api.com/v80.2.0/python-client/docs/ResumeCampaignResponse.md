# ResumeCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.resume_campaign_response import ResumeCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeCampaignResponse from a JSON string
resume_campaign_response_instance = ResumeCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(ResumeCampaignResponse.to_json())

# convert the object into a dict
resume_campaign_response_dict = resume_campaign_response_instance.to_dict()
# create an instance of ResumeCampaignResponse from a dict
resume_campaign_response_from_dict = ResumeCampaignResponse.from_dict(resume_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


