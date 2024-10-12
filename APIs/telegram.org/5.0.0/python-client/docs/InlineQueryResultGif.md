# InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the animation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the GIF file to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**gif_duration** | **int** | *Optional*. Duration of the GIF | [optional] 
**gif_height** | **int** | *Optional*. Height of the GIF | [optional] 
**gif_url** | **str** | A valid URL for the GIF file. File size must not exceed 1MB | 
**gif_width** | **int** | *Optional*. Width of the GIF | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**thumb_mime_type** | **str** | *Optional*. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” | [optional] [default to 'image/jpeg']
**thumb_url** | **str** | URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result | 
**title** | **str** | *Optional*. Title for the result | [optional] 
**type** | **str** | Type of the result, must be *gif* | 

## Example

```python
from openapi_client.models.inline_query_result_gif import InlineQueryResultGif

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultGif from a JSON string
inline_query_result_gif_instance = InlineQueryResultGif.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultGif.to_json())

# convert the object into a dict
inline_query_result_gif_dict = inline_query_result_gif_instance.to_dict()
# create an instance of InlineQueryResultGif from a dict
inline_query_result_gif_from_dict = InlineQueryResultGif.from_dict(inline_query_result_gif_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


