# SlashCommandMetadata

Annotation metadata for slash commands (/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot** | [**User**](User.md) |  | [optional] 
**command_id** | **str** | The command ID of the invoked slash command. | [optional] 
**command_name** | **str** | The name of the invoked slash command. | [optional] 
**triggers_dialog** | **bool** | Indicates whether the slash command is for a dialog. | [optional] 
**type** | **str** | The type of slash command. | [optional] 

## Example

```python
from openapi_client.models.slash_command_metadata import SlashCommandMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SlashCommandMetadata from a JSON string
slash_command_metadata_instance = SlashCommandMetadata.from_json(json)
# print the JSON string representation of the object
print(SlashCommandMetadata.to_json())

# convert the object into a dict
slash_command_metadata_dict = slash_command_metadata_instance.to_dict()
# create an instance of SlashCommandMetadata from a dict
slash_command_metadata_from_dict = SlashCommandMetadata.from_dict(slash_command_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


