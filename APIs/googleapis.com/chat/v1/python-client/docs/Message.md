# Message

A message in a Google Chat space.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_response** | [**ActionResponse**](ActionResponse.md) |  | [optional] 
**annotations** | [**List[Annotation]**](Annotation.md) | Output only. Annotations associated with the &#x60;text&#x60; in this message. | [optional] [readonly] 
**argument_text** | **str** | Output only. Plain-text body of the message with all Chat app mentions stripped out. | [optional] [readonly] 
**attached_gifs** | [**List[AttachedGif]**](AttachedGif.md) | Output only. GIF images that are attached to the message. | [optional] [readonly] 
**attachment** | [**List[Attachment]**](Attachment.md) | User-uploaded attachment. | [optional] 
**cards** | [**List[Card]**](Card.md) | Deprecated: Use &#x60;cards_v2&#x60; instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. &#x60;cards&#x60; and &#x60;cards_v2&#x60; can have a maximum size of 32 KB. | [optional] 
**cards_v2** | [**List[CardWithId]**](CardWithId.md) | An array of [cards](https://developers.google.com/chat/api/reference/rest/v1/cards). Only Chat apps can create cards. If your Chat app [authenticates as a user](https://developers.google.com/chat/api/guides/auth/users), the messages can&#39;t contain cards. To learn about cards and how to create them, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). [Card builder](https://addons.gsuite.google.com/uikit/builder) | [optional] 
**client_assigned_message_id** | **str** | Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [&#x60;messageId&#x60;](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). | [optional] 
**create_time** | **str** | Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time. | [optional] 
**delete_time** | **str** | Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty. | [optional] [readonly] 
**deletion_metadata** | [**DeletionMetadata**](DeletionMetadata.md) |  | [optional] 
**emoji_reaction_summaries** | [**List[EmojiReactionSummary]**](EmojiReactionSummary.md) | Output only. The list of emoji reaction summaries on the message. | [optional] [readonly] 
**fallback_text** | **str** | A plain-text description of the message&#39;s cards, used when the actual cards can&#39;t be displayed—for example, mobile notifications. | [optional] 
**formatted_text** | **str** | Output only. Contains the message &#x60;text&#x60; with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/chat/format-messages) for bold, italic, strikethrough, monospace, and monospace block. * [User mentions](https://developers.google.com/chat/format-messages#messages-@mention) using the format &#x60;&#x60;. * Custom hyperlinks using the format &#x60;&lt;{url}|{rendered_text}&gt;&#x60; where the first string is the URL and the second is the rendered text—for example, &#x60;&#x60;. * Custom emoji using the format &#x60;:{emoji_name}:&#x60;—for example, &#x60;:smile:&#x60;. This doesn&#39;t apply to Unicode emoji, such as &#x60;U+1F600&#x60; for a grinning face emoji. For more information, see [View text formatting sent in a message](https://developers.google.com/chat/format-messages#view_text_formatting_sent_in_a_message) | [optional] [readonly] 
**last_update_time** | **str** | Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty. | [optional] [readonly] 
**matched_url** | [**MatchedUrl**](MatchedUrl.md) |  | [optional] 
**name** | **str** | Resource name of the message. Format: &#x60;spaces/{space}/messages/{message}&#x60; Where &#x60;{space}&#x60; is the ID of the space where the message is posted and &#x60;{message}&#x60; is a system-assigned ID for the message. For example, &#x60;spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB&#x60;. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing &#x60;{message}&#x60; with the value from the &#x60;clientAssignedMessageId&#x60; field. For example, &#x60;spaces/AAAAAAAAAAA/messages/client-custom-name&#x60;. For details, see [Name a message](https://developers.google.com/chat/api/guides/v1/messages/create#name_a_created_message). | [optional] 
**private_message_viewer** | [**User**](User.md) |  | [optional] 
**quoted_message_metadata** | [**QuotedMessageMetadata**](QuotedMessageMetadata.md) |  | [optional] 
**sender** | [**User**](User.md) |  | [optional] 
**slash_command** | [**SlashCommand**](SlashCommand.md) |  | [optional] 
**space** | [**Space**](Space.md) |  | [optional] 
**text** | **str** | Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/chat/how-tos/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a text message](https://developers.google.com/chat/api/guides/v1/messages/create#create-text-messages). | [optional] 
**thread** | [**Thread**](Thread.md) |  | [optional] 
**thread_reply** | **bool** | Output only. When &#x60;true&#x60;, the message is a response in a reply thread. When &#x60;false&#x60;, the message is visible in the space&#39;s top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn&#39;t support reply in threads, this field is always &#x60;false&#x60;. | [optional] [readonly] 

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


