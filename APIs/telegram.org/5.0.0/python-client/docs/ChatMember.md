# ChatMember

This object contains information about one member of a chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_add_web_page_previews** | **bool** | *Optional*. Restricted only. True, if the user is allowed to add web page previews to their messages | [optional] 
**can_be_edited** | **bool** | *Optional*. Administrators only. True, if the bot is allowed to edit administrator privileges of that user | [optional] 
**can_change_info** | **bool** | *Optional*. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings | [optional] 
**can_delete_messages** | **bool** | *Optional*. Administrators only. True, if the administrator can delete messages of other users | [optional] 
**can_edit_messages** | **bool** | *Optional*. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only | [optional] 
**can_invite_users** | **bool** | *Optional*. Administrators and restricted only. True, if the user is allowed to invite new users to the chat | [optional] 
**can_pin_messages** | **bool** | *Optional*. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only | [optional] 
**can_post_messages** | **bool** | *Optional*. Administrators only. True, if the administrator can post in the channel; channels only | [optional] 
**can_promote_members** | **bool** | *Optional*. Administrators only. True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user) | [optional] 
**can_restrict_members** | **bool** | *Optional*. Administrators only. True, if the administrator can restrict, ban or unban chat members | [optional] 
**can_send_media_messages** | **bool** | *Optional*. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes | [optional] 
**can_send_messages** | **bool** | *Optional*. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues | [optional] 
**can_send_other_messages** | **bool** | *Optional*. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots | [optional] 
**can_send_polls** | **bool** | *Optional*. Restricted only. True, if the user is allowed to send polls | [optional] 
**custom_title** | **str** | *Optional*. Owner and administrators only. Custom title for this user | [optional] 
**is_anonymous** | **bool** | *Optional*. Owner and administrators only. True, if the user&#39;s presence in the chat is hidden | [optional] 
**is_member** | **bool** | *Optional*. Restricted only. True, if the user is a member of the chat at the moment of the request | [optional] 
**status** | **str** | The member&#39;s status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked” | 
**until_date** | **int** | *Optional*. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time | [optional] 
**user** | [**User**](User.md) |  | 

## Example

```python
from openapi_client.models.chat_member import ChatMember

# TODO update the JSON string below
json = "{}"
# create an instance of ChatMember from a JSON string
chat_member_instance = ChatMember.from_json(json)
# print the JSON string representation of the object
print(ChatMember.to_json())

# convert the object into a dict
chat_member_dict = chat_member_instance.to_dict()
# create an instance of ChatMember from a dict
chat_member_from_dict = ChatMember.from_dict(chat_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


