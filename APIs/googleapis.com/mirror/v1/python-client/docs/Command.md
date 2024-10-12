# Command

A single menu command that is part of a Contact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of operation this command corresponds to. Allowed values are:   - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the \&quot;Take a note\&quot; voice menu command.   - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the \&quot;Post an update\&quot; voice menu command. | [optional] 

## Example

```python
from openapi_client.models.command import Command

# TODO update the JSON string below
json = "{}"
# create an instance of Command from a JSON string
command_instance = Command.from_json(json)
# print the JSON string representation of the object
print(Command.to_json())

# convert the object into a dict
command_dict = command_instance.to_dict()
# create an instance of Command from a dict
command_from_dict = Command.from_dict(command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


