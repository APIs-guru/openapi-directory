# ChosenInlineResult

Represents a [result](https://core.telegram.org/bots/api/#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**User**](User.md) |  | 
**inline_message_id** | **str** | *Optional*. Identifier of the sent inline message. Available only if there is an [inline keyboard](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) attached to the message. Will be also received in [callback queries](https://core.telegram.org/bots/api/#callbackquery) and can be used to [edit](https://core.telegram.org/bots/api/#updating-messages) the message. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**query** | **str** | The query that was used to obtain the result | 
**result_id** | **str** | The unique identifier for the result that was chosen | 

## Example

```python
from openapi_client.models.chosen_inline_result import ChosenInlineResult

# TODO update the JSON string below
json = "{}"
# create an instance of ChosenInlineResult from a JSON string
chosen_inline_result_instance = ChosenInlineResult.from_json(json)
# print the JSON string representation of the object
print(ChosenInlineResult.to_json())

# convert the object into a dict
chosen_inline_result_dict = chosen_inline_result_instance.to_dict()
# create an instance of ChosenInlineResult from a dict
chosen_inline_result_from_dict = ChosenInlineResult.from_dict(chosen_inline_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


