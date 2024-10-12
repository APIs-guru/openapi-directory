# InlineQueryResultCachedDocument

Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use *input\\_message\\_content* to send a message with the specified content instead of the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | *Optional*. Caption of the document to be sent, 0-1024 characters after entities parsing | [optional] 
**caption_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. List of special entities that appear in the caption, which can be specified instead of *parse\\_mode* | [optional] 
**description** | **str** | *Optional*. Short description of the result | [optional] 
**document_file_id** | **str** | A valid file identifier for the file | 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | [optional] 
**parse_mode** | **str** | *Optional*. Mode for parsing entities in the document caption. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**title** | **str** | Title for the result | 
**type** | **str** | Type of the result, must be *document* | 

## Example

```python
from openapi_client.models.inline_query_result_cached_document import InlineQueryResultCachedDocument

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultCachedDocument from a JSON string
inline_query_result_cached_document_instance = InlineQueryResultCachedDocument.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultCachedDocument.to_json())

# convert the object into a dict
inline_query_result_cached_document_dict = inline_query_result_cached_document_instance.to_dict()
# create an instance of InlineQueryResultCachedDocument from a dict
inline_query_result_cached_document_from_dict = InlineQueryResultCachedDocument.from_dict(inline_query_result_cached_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


