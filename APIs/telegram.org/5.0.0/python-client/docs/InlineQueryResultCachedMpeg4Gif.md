# InlineQueryResultCachedMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the animation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**mpeg4_file_id** | **str** | A valid file identifier for the MP4 file | 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**title** | **str** | *Optional*. Title for the result | [optional] 
**type** | **str** | Type of the result, must be *mpeg4\\_gif* | 

## Example

```python
from openapi_client.models.inline_query_result_cached_mpeg4_gif import InlineQueryResultCachedMpeg4Gif

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedMpeg4Gif from a JSON string
inline_query_result_cached_mpeg4_gif_instance = InlineQueryResultCachedMpeg4Gif.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedMpeg4Gif.to_json())

# convert the object into a dict
inline_query_result_cached_mpeg4_gif_dict = inline_query_result_cached_mpeg4_gif_instance.to_dict()
# create an instance of InlineQueryResultCachedMpeg4Gif from a dict
inline_query_result_cached_mpeg4_gif_from_dict = InlineQueryResultCachedMpeg4Gif.from_dict(inline_query_result_cached_mpeg4_gif_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


