# InlineQueryResultCachedAudio

Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_file_id** | **str** | A valid file identifier for the audio file | 
**caption** | **str** | *Optional*. Caption, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the audio caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**type** | **str** | Type of the result, must be *audio* | 

## Example

```python
from openapi_client.models.inline_query_result_cached_audio import InlineQueryResultCachedAudio

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedAudio from a JSON string
inline_query_result_cached_audio_instance = InlineQueryResultCachedAudio.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedAudio.to_json())

# convert the object into a dict
inline_query_result_cached_audio_dict = inline_query_result_cached_audio_instance.to_dict()
# create an instance of InlineQueryResultCachedAudio from a dict
inline_query_result_cached_audio_from_dict = InlineQueryResultCachedAudio.from_dict(inline_query_result_cached_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


