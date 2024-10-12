# ChatPermissions

Describes actions that a non-administrator user is allowed to take in a chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_add_web_page_previews** | **bool** | *Optional*. True, if the user is allowed to add web page previews to their messages, implies can\\_send\\_media\\_messages | [optional] 
**can_change_info** | **bool** | *Optional*. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups | [optional] 
**can_invite_users** | **bool** | *Optional*. True, if the user is allowed to invite new users to the chat | [optional] 
**can_pin_messages** | **bool** | *Optional*. True, if the user is allowed to pin messages. Ignored in public supergroups | [optional] 
**can_send_media_messages** | **bool** | *Optional*. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can\\_send\\_messages | [optional] 
**can_send_messages** | **bool** | *Optional*. True, if the user is allowed to send text messages, contacts, locations and venues | [optional] 
**can_send_other_messages** | **bool** | *Optional*. True, if the user is allowed to send animations, games, stickers and use inline bots, implies can\\_send\\_media\\_messages | [optional] 
**can_send_polls** | **bool** | *Optional*. True, if the user is allowed to send polls, implies can\\_send\\_messages | [optional] 

## Example

```python
from openapi_client.models.chat_permissions import ChatPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of ChatPermissions from a JSON string
chat_permissions_instance = ChatPermissions.from_json(json)
# print the JSON string representation of the object
print(ChatPermissions.to_json())

# convert the object into a dict
chat_permissions_dict = chat_permissions_instance.to_dict()
# create an instance of ChatPermissions from a dict
chat_permissions_from_dict = ChatPermissions.from_dict(chat_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


