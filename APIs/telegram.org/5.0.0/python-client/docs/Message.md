# Message

This object represents a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animation** | [**Animation**](Animation.md) |  | [optional] 
**audio** | [**Audio**](Audio.md) |  | [optional] 
**author_signature** | **str** | *Optional*. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator | [optional] 
**caption** | **str** | *Optional*. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption | [optional] 
**channel_chat_created** | **bool** | *Optional*. Service message: the channel has been created. This field can&#39;t be received in a message coming through updates, because bot can&#39;t be a member of a channel when it is created. It can only be found in reply\\_to\\_message if someone replies to a very first message in a channel. | [optional] 
**chat** | [**Chat**](Chat.md) |  | 
**connected_website** | **str** | *Optional*. The domain name of the website on which the user has logged in. [More about Telegram Login »](/widgets/login) | [optional] 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**var_date** | **int** | Date the message was sent in Unix time | 
**delete_chat_photo** | **bool** | *Optional*. Service message: the chat photo was deleted | [optional] 
**dice** | [**Dice**](Dice.md) |  | [optional] 
**document** | [**Document**](Document.md) |  | [optional] 
**edit_date** | **int** | *Optional*. Date the message was last edited in Unix time | [optional] 
**entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text | [optional] 
**forward_date** | **int** | *Optional*. For forwarded messages, date the original message was sent in Unix time | [optional] 
**forward_from** | [**User**](User.md) |  | [optional] 
**forward_from_chat** | [**Chat**](Chat.md) |  | [optional] 
**forward_from_message_id** | **int** | *Optional*. For messages forwarded from channels, identifier of the original message in the channel | [optional] 
**forward_sender_name** | **str** | *Optional*. Sender&#39;s name for messages forwarded from users who disallow adding a link to their account in forwarded messages | [optional] 
**forward_signature** | **str** | *Optional*. For messages forwarded from channels, signature of the post author if present | [optional] 
**var_from** | [**User**](User.md) |  | [optional] 
**game** | [**Game**](Game.md) |  | [optional] 
**group_chat_created** | **bool** | *Optional*. Service message: the group has been created | [optional] 
**invoice** | [**Invoice**](Invoice.md) |  | [optional] 
**left_chat_member** | [**User**](User.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**media_group_id** | **str** | *Optional*. The unique identifier of a media message group this message belongs to | [optional] 
**message_id** | **int** | Unique message identifier inside this chat | 
**migrate_from_chat_id** | **int** | *Optional*. The supergroup has been migrated from a group with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. | [optional] 
**migrate_to_chat_id** | **int** | *Optional*. The group has been migrated to a supergroup with the specified identifier. This number may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. | [optional] 
**new_chat_members** | [**List[User]**](User.md) | *Optional*. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) | [optional] 
**new_chat_photo** | [**List[PhotoSize]**](PhotoSize.md) | *Optional*. A chat photo was change to this value | [optional] 
**new_chat_title** | **str** | *Optional*. A chat title was changed to this value | [optional] 
**passport_data** | [**PassportData**](PassportData.md) |  | [optional] 
**photo** | [**List[PhotoSize]**](PhotoSize.md) | *Optional*. Message is a photo, available sizes of the photo | [optional] 
**pinned_message** | [**Message**](Message.md) |  | [optional] 
**poll** | [**Poll**](Poll.md) |  | [optional] 
**proximity_alert_triggered** | [**ProximityAlertTriggered**](ProximityAlertTriggered.md) |  | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**reply_to_message** | [**Message**](Message.md) |  | [optional] 
**sender_chat** | [**Chat**](Chat.md) |  | [optional] 
**sticker** | [**Sticker**](Sticker.md) |  | [optional] 
**successful_payment** | [**SuccessfulPayment**](SuccessfulPayment.md) |  | [optional] 
**supergroup_chat_created** | **bool** | *Optional*. Service message: the supergroup has been created. This field can&#39;t be received in a message coming through updates, because bot can&#39;t be a member of a supergroup when it is created. It can only be found in reply\\_to\\_message if someone replies to a very first message in a directly created supergroup. | [optional] 
**text** | **str** | *Optional*. For text messages, the actual UTF-8 text of the message, 0-4096 characters | [optional] 
**venue** | [**Venue**](Venue.md) |  | [optional] 
**via_bot** | [**User**](User.md) |  | [optional] 
**video** | [**Video**](Video.md) |  | [optional] 
**video_note** | [**VideoNote**](VideoNote.md) |  | [optional] 
**voice** | [**Voice**](Voice.md) |  | [optional] 

## Example

```python
from openapi_client.models.message import Message

# TODO update the JSON string below
json = "{}"
# create an instance of Message from a JSON string
message_instance = Message.from_json(json)
# print the JSON string representation of the object
print(Message.to_json())

# convert the object into a dict
message_dict = message_instance.to_dict()
# create an instance of Message from a dict
message_from_dict = Message.from_dict(message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


