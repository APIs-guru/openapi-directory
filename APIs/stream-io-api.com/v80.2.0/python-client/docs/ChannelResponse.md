# ChannelResponse

Represents channel in chat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_translation_enabled** | **bool** | Whether auto translation is enabled or not | [optional] 
**auto_translation_language** | **str** | Language to translate to when auto translation is active | [optional] 
**cid** | **str** | Channel CID (&lt;type&gt;:&lt;id&gt;) | 
**config** | [**ChannelConfigWithInfo**](ChannelConfigWithInfo.md) |  | [optional] 
**cooldown** | **int** | Cooldown period after sending each message | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**created_by** | [**UserObject**](UserObject.md) |  | [optional] 
**deleted_at** | **datetime** | Date/time of deletion | [optional] 
**disabled** | **bool** |  | 
**frozen** | **bool** | Whether channel is frozen or not | 
**hidden** | **bool** | Whether this channel is hidden by current user or not | [optional] 
**hide_messages_before** | **datetime** | Date since when the message history is accessible | [optional] 
**id** | **str** | Channel unique ID | 
**last_message_at** | **datetime** | Date of the last message sent | [optional] 
**member_count** | **int** | Number of members in the channel | [optional] 
**members** | [**List[ChannelMember]**](ChannelMember.md) | List of channel members (max 100) | [optional] 
**mute_expires_at** | **datetime** | Date of mute expiration | [optional] 
**muted** | **bool** | Whether this channel is muted or not | [optional] 
**own_capabilities** | **List[str]** | List of channel capabilities of authenticated user | [optional] 
**team** | **str** | Team the channel belongs to (multi-tenant only) | [optional] 
**truncated_at** | **datetime** | Date of the latest truncation of the channel | [optional] 
**truncated_by** | [**UserObject**](UserObject.md) |  | [optional] 
**type** | **str** | Type of the channel | 
**updated_at** | **datetime** | Date/time of the last update | [optional] 

## Example

```python
from openapi_client.models.channel_response import ChannelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelResponse from a JSON string
channel_response_instance = ChannelResponse.from_json(json)
# print the JSON string representation of the object
print(ChannelResponse.to_json())

# convert the object into a dict
channel_response_dict = channel_response_instance.to_dict()
# create an instance of ChannelResponse from a dict
channel_response_from_dict = ChannelResponse.from_dict(channel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


