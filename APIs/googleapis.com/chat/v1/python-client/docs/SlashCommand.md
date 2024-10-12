# SlashCommand

A [slash command](https://developers.google.com/chat/how-tos/slash-commands) in Google Chat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_id** | **str** | The ID of the slash command invoked. | [optional] 

## Example

```python
from openapi_client.models.slash_command import SlashCommand

# TODO update the JSON string below
json = "{}"
# create an instance of SlashCommand from a JSON string
slash_command_instance = SlashCommand.from_json(json)
# print the JSON string representation of the object
print(SlashCommand.to_json())

# convert the object into a dict
slash_command_dict = slash_command_instance.to_dict()
# create an instance of SlashCommand from a dict
slash_command_from_dict = SlashCommand.from_dict(slash_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


