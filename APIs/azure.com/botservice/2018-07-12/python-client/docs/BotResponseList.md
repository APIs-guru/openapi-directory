# BotResponseList

The list of  bot service operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of bot service resources. | [optional] 
**value** | [**List[Bot]**](Bot.md) | Gets the list of bot service results and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bot_response_list import BotResponseList

# TODO update the JSON string below
json = "{}"
# create an instance of BotResponseList from a JSON string
bot_response_list_instance = BotResponseList.from_json(json)
# print the JSON string representation of the object
print(BotResponseList.to_json())

# convert the object into a dict
bot_response_list_dict = bot_response_list_instance.to_dict()
# create an instance of BotResponseList from a dict
bot_response_list_from_dict = BotResponseList.from_dict(bot_response_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


