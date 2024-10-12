# BotCommand

This object represents a bot command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores. | 
**description** | **str** | Description of the command, 3-256 characters. | 

## Example

```python
from openapi_client.models.bot_command import BotCommand

# TODO update the JSON string below
json = "{}"
# create an instance of BotCommand from a JSON string
bot_command_instance = BotCommand.from_json(json)
# print the JSON string representation of the object
print(BotCommand.to_json())

# convert the object into a dict
bot_command_dict = bot_command_instance.to_dict()
# create an instance of BotCommand from a dict
bot_command_from_dict = BotCommand.from_dict(bot_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


