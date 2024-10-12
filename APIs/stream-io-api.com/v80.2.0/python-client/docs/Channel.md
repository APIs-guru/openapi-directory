# Channel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_translation_enabled** | **bool** |  | [optional] 
**auto_translation_language** | **str** |  | 
**cid** | **str** |  | 
**config** | [**ChannelConfig**](ChannelConfig.md) |  | [optional] 
**config_overrides** | [**ChannelConfig**](ChannelConfig.md) |  | [optional] 
**cooldown** | **int** |  | [optional] 
**created_at** | **datetime** |  | 
**created_by** | [**UserObject**](UserObject.md) |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**disabled** | **bool** |  | 
**frozen** | **bool** |  | 
**id** | **str** |  | 
**invites** | [**List[ChannelMember]**](ChannelMember.md) |  | [optional] 
**last_message_at** | **datetime** |  | [optional] 
**member_count** | **int** |  | [optional] 
**members** | [**List[ChannelMember]**](ChannelMember.md) |  | [optional] 
**team** | **str** |  | [optional] 
**truncated_by** | [**UserObject**](UserObject.md) |  | [optional] 
**type** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.channel import Channel

# TODO update the JSON string below
json = "{}"
# create an instance of Channel from a JSON string
channel_instance = Channel.from_json(json)
# print the JSON string representation of the object
print(Channel.to_json())

# convert the object into a dict
channel_dict = channel_instance.to_dict()
# create an instance of Channel from a dict
channel_from_dict = Channel.from_dict(channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


