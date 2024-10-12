# InlineQueryResultCachedPhoto

Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the photo to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**description** | **str** | *Optional*. Short description of the result | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the photo caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**photo_file_id** | **str** | A valid file identifier of the photo | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**title** | **str** | *Optional*. Title for the result | [optional] 
**type** | **str** | Type of the result, must be *photo* | 

## Example

```python
from openapi_client.models.inline_query_result_cached_photo import InlineQueryResultCachedPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedPhoto from a JSON string
inline_query_result_cached_photo_instance = InlineQueryResultCachedPhoto.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedPhoto.to_json())

# convert the object into a dict
inline_query_result_cached_photo_dict = inline_query_result_cached_photo_instance.to_dict()
# create an instance of InlineQueryResultCachedPhoto from a dict
inline_query_result_cached_photo_from_dict = InlineQueryResultCachedPhoto.from_dict(inline_query_result_cached_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


