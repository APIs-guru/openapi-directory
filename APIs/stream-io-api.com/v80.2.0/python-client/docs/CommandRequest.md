# CommandRequest

Represents custom chat command

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **str** | Arguments help text, shown in commands auto-completion | [optional] 
**description** | **str** | Description, shown in commands auto-completion | [optional] 
**name** | **str** | Unique command name | [optional] 
**set** | **str** | Set name used for grouping commands | [optional] 

## Example

```python
from openapi_client.models.command_request import CommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CommandRequest from a JSON string
command_request_instance = CommandRequest.from_json(json)
# print the JSON string representation of the object
print(CommandRequest.to_json())

# convert the object into a dict
command_request_dict = command_request_instance.to_dict()
# create an instance of CommandRequest from a dict
command_request_from_dict = CommandRequest.from_dict(command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


