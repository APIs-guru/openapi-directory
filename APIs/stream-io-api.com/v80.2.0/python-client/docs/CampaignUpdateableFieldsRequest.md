# CampaignUpdateableFieldsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[AttachmentRequest]**](AttachmentRequest.md) |  | [optional] 
**channel_type** | **str** |  | [optional] 
**defaults** | **Dict[str, str]** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**segment_id** | **str** |  | [optional] 
**sender_id** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.campaign_updateable_fields_request import CampaignUpdateableFieldsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignUpdateableFieldsRequest from a JSON string
campaign_updateable_fields_request_instance = CampaignUpdateableFieldsRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignUpdateableFieldsRequest.to_json())

# convert the object into a dict
campaign_updateable_fields_request_dict = campaign_updateable_fields_request_instance.to_dict()
# create an instance of CampaignUpdateableFieldsRequest from a dict
campaign_updateable_fields_request_from_dict = CampaignUpdateableFieldsRequest.from_dict(campaign_updateable_fields_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


