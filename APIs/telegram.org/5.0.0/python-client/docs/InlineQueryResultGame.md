# InlineQueryResultGame

Represents a [Game](https://core.telegram.org/bots/api/#games).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**game_short_name** | **str** | Short name of the game | 
**id** | **str** | Unique identifier for this result, 1-64 bytes | 
**reply_markup** | [**InlineKeyboardMarkup**](InlineKeyboardMarkup.md) |  | [optional] 
**type** | **str** | Type of the result, must be *game* | 

## Example

```python
from openapi_client.models.inline_query_result_game import InlineQueryResultGame

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQueryResultGame from a JSON string
inline_query_result_game_instance = InlineQueryResultGame.from_json(json)
# print the JSON string representation of the object
print(InlineQueryResultGame.to_json())

# convert the object into a dict
inline_query_result_game_dict = inline_query_result_game_instance.to_dict()
# create an instance of InlineQueryResultGame from a dict
inline_query_result_game_from_dict = InlineQueryResultGame.from_dict(inline_query_result_game_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


