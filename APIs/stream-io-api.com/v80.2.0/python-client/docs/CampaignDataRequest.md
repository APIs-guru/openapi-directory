# CampaignDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[AttachmentRequest]**](AttachmentRequest.md) |  | [optional] 
**channel_type** | **str** |  | [optional] 
**defaults** | **Dict[str, str]** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**segment_id** | **str** |  | 
**sender_id** | **str** |  | 
**text** | **str** |  | 

## Example

```python
from openapi_client.models.campaign_data_request import CampaignDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignDataRequest from a JSON string
campaign_data_request_instance = CampaignDataRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignDataRequest.to_json())

# convert the object into a dict
campaign_data_request_dict = campaign_data_request_instance.to_dict()
# create an instance of CampaignDataRequest from a dict
campaign_data_request_from_dict = CampaignDataRequest.from_dict(campaign_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


