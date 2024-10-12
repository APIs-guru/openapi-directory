# ChannelResponseRequest

Represents channel in chat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_translation_enabled** | **bool** | Whether auto translation is enabled or not | [optional] 
**auto_translation_language** | **str** | Language to translate to when auto translation is active | [optional] 
**cid** | **str** | Channel CID (&lt;type&gt;:&lt;id&gt;) | [optional] 
**config** | [**ChannelConfigWithInfoRequest**](ChannelConfigWithInfoRequest.md) |  | [optional] 
**cooldown** | **int** | Cooldown period after sending each message | [optional] 
**created_at** | **datetime** | Date/time of creation | [optional] 
**created_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**deleted_at** | **datetime** | Date/time of deletion | [optional] 
**disabled** | **bool** |  | [optional] 
**frozen** | **bool** | Whether channel is frozen or not | [optional] 
**hidden** | **bool** | Whether this channel is hidden by current user or not | [optional] 
**hide_messages_before** | **datetime** | Date since when the message history is accessible | [optional] 
**id** | **str** | Channel unique ID | [optional] 
**last_message_at** | **datetime** | Date of the last message sent | [optional] 
**member_count** | **int** | Number of members in the channel | [optional] 
**members** | [**List[ChannelMemberRequest]**](ChannelMemberRequest.md) | List of channel members (max 100) | [optional] 
**mute_expires_at** | **datetime** | Date of mute expiration | [optional] 
**muted** | **bool** | Whether this channel is muted or not | [optional] 
**own_capabilities** | **List[str]** | List of channel capabilities of authenticated user | [optional] 
**team** | **str** | Team the channel belongs to (multi-tenant only) | [optional] 
**truncated_at** | **datetime** | Date of the latest truncation of the channel | [optional] 
**truncated_by** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**type** | **str** | Type of the channel | [optional] 
**updated_at** | **datetime** | Date/time of the last update | [optional] 

## Example

```python
from openapi_client.models.channel_response_request import ChannelResponseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelResponseRequest from a JSON string
channel_response_request_instance = ChannelResponseRequest.from_json(json)
# print the JSON string representation of the object
print(ChannelResponseRequest.to_json())

# convert the object into a dict
channel_response_request_dict = channel_response_request_instance.to_dict()
# create an instance of ChannelResponseRequest from a dict
channel_response_request_from_dict = ChannelResponseRequest.from_dict(channel_response_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


