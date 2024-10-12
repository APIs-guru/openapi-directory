# Chat

This object represents a chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** | *Optional*. Bio of the other party in a private chat. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**can_set_sticker_set** | **bool** | *Optional*. True, if the bot can change the group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**description** | **str** | *Optional*. Description, for groups, supergroups and channel chats. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**first_name** | **str** | *Optional*. First name of the other party in a private chat | [optional] 
**id** | **int** | Unique identifier for this chat. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. | 
**invite_link** | **str** | *Optional*. Chat invite link, for groups, supergroups and channel chats. Each administrator in a chat generates their own invite links, so the bot must first generate the link using [exportChatInviteLink](https://core.telegram.org/bots/api/#exportchatinvitelink). Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**last_name** | **str** | *Optional*. Last name of the other party in a private chat | [optional] 
**linked_chat_id** | **int** | *Optional*. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**location** | [**ChatLocation**](ChatLocation.md) |  | [optional] 
**permissions** | [**ChatPermissions**](ChatPermissions.md) |  | [optional] 
**photo** | [**ChatPhoto**](ChatPhoto.md) |  | [optional] 
**pinned_message** | [**Message**](Message.md) |  | [optional] 
**slow_mode_delay** | **int** | *Optional*. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**sticker_set_name** | **str** | *Optional*. For supergroups, name of group sticker set. Returned only in [getChat](https://core.telegram.org/bots/api/#getchat). | [optional] 
**title** | **str** | *Optional*. Title, for supergroups, channels and group chats | [optional] 
**type** | **str** | Type of chat, can be either “private”, “group”, “supergroup” or “channel” | 
**username** | **str** | *Optional*. Username, for private chats, supergroups and channels if available | [optional] 

## Example

```python
from openapi_client.models.chat import Chat

# TODO update the JSON string below
json = "{}"
# create an instance of Chat from a JSON string
chat_instance = Chat.from_json(json)
# print the JSON string representation of the object
print(Chat.to_json())

# convert the object into a dict
chat_dict = chat_instance.to_dict()
# create an instance of Chat from a dict
chat_from_dict = Chat.from_dict(chat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


