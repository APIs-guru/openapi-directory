# InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the sticker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**sticker_file_id** | **str** | A valid file identifier of the sticker | 
**type** | **str** | Type of the result, must be *sticker* | 

## Example

```python
from openapi_client.models.inline_query_result_cached_sticker import InlineQueryResultCachedSticker

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedSticker from a JSON string
inline_query_result_cached_sticker_instance = InlineQueryResultCachedSticker.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedSticker.to_json())

# convert the object into a dict
inline_query_result_cached_sticker_dict = inline_query_result_cached_sticker_instance.to_dict()
# create an instance of InlineQueryResultCachedSticker from a dict
inline_query_result_cached_sticker_from_dict = InlineQueryResultCachedSticker.from_dict(inline_query_result_cached_sticker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


