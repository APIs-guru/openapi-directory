# Command

Represents custom chat command

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **str** | Arguments help text, shown in commands auto-completion | 
**created_at** | **datetime** | Date/time of creation | [optional] [readonly] 
**description** | **str** | Description, shown in commands auto-completion | 
**name** | **str** | Unique command name | 
**set** | **str** | Set name used for grouping commands | 
**updated_at** | **datetime** | Date/time of the last update | [optional] [readonly] 

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


