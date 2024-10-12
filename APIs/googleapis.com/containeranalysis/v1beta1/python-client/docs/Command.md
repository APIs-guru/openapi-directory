# Command

Command describes a step performed as part of the build pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Command-line arguments used when executing this command. | [optional] 
**dir** | **str** | Working directory (relative to project source root) used when running this command. | [optional] 
**env** | **List[str]** | Environment variables set before running this command. | [optional] 
**id** | **str** | Optional unique identifier for this command, used in wait_for to reference this command as a dependency. | [optional] 
**name** | **str** | Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to &#x60;docker pull&#x60;. | [optional] 
**wait_for** | **List[str]** | The ID(s) of the command(s) that this command depends on. | [optional] 

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


