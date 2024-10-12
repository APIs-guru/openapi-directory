# InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the voice message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the voice message caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**title** | **str** | Voice message title | 
**type** | **str** | Type of the result, must be *voice* | 
**voice_file_id** | **str** | A valid file identifier for the voice message | 

## Example

```python
from openapi_client.models.inline_query_result_cached_voice import InlineQueryResultCachedVoice

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedVoice from a JSON string
inline_query_result_cached_voice_instance = InlineQueryResultCachedVoice.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedVoice.to_json())

# convert the object into a dict
inline_query_result_cached_voice_dict = inline_query_result_cached_voice_instance.to_dict()
# create an instance of InlineQueryResultCachedVoice from a dict
inline_query_result_cached_voice_from_dict = InlineQueryResultCachedVoice.from_dict(inline_query_result_cached_voice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


