# InlineQueryResultArticle

Represents a link to an article or web page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | *Optional*. Short description of the result | [optional] 
**hide_url** | **bool** | *Optional*. Pass *True*, if you don&#39;t want the URL to be shown in the message | [optional] 
**id** | **str** | Unique identifier for this result, 1-64 Bytes | 
**input_message_content** | [**InputMessageContent**](InputMessageContent.md) |  | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**thumb_height** | **int** | *Optional*. Thumbnail height | [optional] 
**thumb_url** | **str** | *Optional*. Url of the thumbnail for the result | [optional] 
**thumb_width** | **int** | *Optional*. Thumbnail width | [optional] 
**title** | **str** | Title of the result | 
**type** | **str** | Type of the result, must be *article* | 
**url** | **str** | *Optional*. URL of the result | [optional] 

## Example

```python
from openapi_client.models.inline_query_result_article import InlineQueryResultArticle

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultArticle from a JSON string
inline_query_result_article_instance = InlineQueryResultArticle.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultArticle.to_json())

# convert the object into a dict
inline_query_result_article_dict = inline_query_result_article_instance.to_dict()
# create an instance of InlineQueryResultArticle from a dict
inline_query_result_article_from_dict = InlineQueryResultArticle.from_dict(inline_query_result_article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


