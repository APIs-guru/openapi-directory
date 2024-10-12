# SuperChatEventSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_micros** | **str** | The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000. | [optional] 
**channel_id** | **str** | Channel id where the event occurred. | [optional] 
**comment_text** | **str** | The text contents of the comment left by the user. | [optional] 
**created_at** | **datetime** | The date and time when the event occurred. | [optional] 
**currency** | **str** | The currency in which the purchase was made. ISO 4217. | [optional] 
**display_string** | **str** | A rendered string that displays the purchase amount and currency (e.g., \&quot;$1.00\&quot;). The string is rendered for the given language. | [optional] 
**is_super_sticker_event** | **bool** | True if this event is a Super Sticker event. | [optional] 
**message_type** | **int** | The tier for the paid message, which is based on the amount of money spent to purchase the message. | [optional] 
**super_sticker_metadata** | [**SuperStickerMetadata**](SuperStickerMetadata.md) |  | [optional] 
**supporter_details** | [**ChannelProfileDetails**](ChannelProfileDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.super_chat_event_snippet import SuperChatEventSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of SuperChatEventSnippet from a JSON string
super_chat_event_snippet_instance = SuperChatEventSnippet.from_json(json)
# print the JSON string representation of the object
print(SuperChatEventSnippet.to_json())

# convert the object into a dict
super_chat_event_snippet_dict = super_chat_event_snippet_instance.to_dict()
# create an instance of SuperChatEventSnippet from a dict
super_chat_event_snippet_from_dict = SuperChatEventSnippet.from_dict(super_chat_event_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


