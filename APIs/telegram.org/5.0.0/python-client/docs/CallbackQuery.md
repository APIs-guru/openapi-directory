# CallbackQuery

This object represents an incoming callback query from a callback button in an [inline keyboard](/bots#inline-keyboards-and-on-the-fly-updating). If the button that originated the query was attached to a message sent by the bot, the field *message* will be present. If the button was attached to a message sent via the bot (in [inline mode](https://core.telegram.org/bots/api/#inline-mode)), the field *inline\\_message\\_id* will be present. Exactly one of the fields *data* or *game\\_short\\_name* will be present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_instance** | **str** | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in [games](https://core.telegram.org/bots/api/#games). | 
**data** | **str** | *Optional*. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field. | [optional] 
**var_from** | [**User**](User.md) |  | 
**game_short_name** | **str** | *Optional*. Short name of a [Game](https://core.telegram.org/bots/api/#games) to be returned, serves as the unique identifier for the game | [optional] 
**id** | **str** | Unique identifier for this query | 
**inline_message_id** | **str** | *Optional*. Identifier of the message sent via the bot in inline mode, that originated the query. | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.callback_query import CallbackQuery

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackQuery from a JSON string
callback_query_instance = CallbackQuery.from_json(json)
# print the JSON string representation of the object
print(CallbackQuery.to_json())

# convert the object into a dict
callback_query_dict = callback_query_instance.to_dict()
# create an instance of CallbackQuery from a dict
callback_query_from_dict = CallbackQuery.from_dict(callback_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


