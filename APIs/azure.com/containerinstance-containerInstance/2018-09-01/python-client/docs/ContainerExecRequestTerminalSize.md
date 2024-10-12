# ContainerExecRequestTerminalSize

The size of the terminal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cols** | **int** | The column size of the terminal | [optional] 
**rows** | **int** | The row size of the terminal | [optional] 

## Example

```python
from openapi_client.models.container_exec_request_terminal_size import ContainerExecRequestTerminalSize

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerExecRequestTerminalSize from a JSON string
container_exec_request_terminal_size_instance = ContainerExecRequestTerminalSize.from_json(json)
# print the JSON string representation of the object
print(ContainerExecRequestTerminalSize.to_json())

# convert the object into a dict
container_exec_request_terminal_size_dict = container_exec_request_terminal_size_instance.to_dict()
# create an instance of ContainerExecRequestTerminalSize from a dict
container_exec_request_terminal_size_from_dict = ContainerExecRequestTerminalSize.from_dict(container_exec_request_terminal_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


