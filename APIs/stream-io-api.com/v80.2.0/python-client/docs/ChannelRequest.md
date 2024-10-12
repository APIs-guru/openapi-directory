# ChannelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_translation_enabled** | **bool** | Enable or disable auto translation | [optional] 
**auto_translation_language** | **str** | Switch auto translation language | [optional] 
**config_overrides** | [**ChannelConfigRequest**](ChannelConfigRequest.md) |  | [optional] 
**created_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**disabled** | **bool** |  | [optional] 
**frozen** | **bool** | Freeze or unfreeze the channel | [optional] 
**members** | [**List[ChannelMemberRequest]**](ChannelMemberRequest.md) |  | [optional] 
**own_capabilities** | **List[int]** |  | [optional] 
**team** | **str** | Team the channel belongs to (if multi-tenant mode is enabled) | [optional] 
**truncated_at** | **List[int]** |  | [optional] 
**truncated_by** | **List[int]** |  | [optional] 
**truncated_by_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.channel_request import ChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelRequest from a JSON string
channel_request_instance = ChannelRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelRequest.to_json())

# convert the object into a dict
channel_request_dict = channel_request_instance.to_dict()
# create an instance of ChannelRequest from a dict
channel_request_from_dict = ChannelRequest.from_dict(channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


