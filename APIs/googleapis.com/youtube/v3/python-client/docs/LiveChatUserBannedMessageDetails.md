# LiveChatUserBannedMessageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ban_duration_seconds** | **str** | The duration of the ban. This property is only present if the banType is temporary. | [optional] 
**ban_type** | **str** | The type of ban. | [optional] 
**banned_user_details** | [**ChannelProfileDetails**](ChannelProfileDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.live_chat_user_banned_message_details import LiveChatUserBannedMessageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatUserBannedMessageDetails from a JSON string
live_chat_user_banned_message_details_instance = LiveChatUserBannedMessageDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatUserBannedMessageDetails.to_json())

# convert the object into a dict
live_chat_user_banned_message_details_dict = live_chat_user_banned_message_details_instance.to_dict()
# create an instance of LiveChatUserBannedMessageDetails from a dict
live_chat_user_banned_message_details_from_dict = LiveChatUserBannedMessageDetails.from_dict(live_chat_user_banned_message_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


