# ContainerExecRequest

The start container exec request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The command to be executed. | [optional] 
**terminal_size** | [**ContainerExecRequestTerminalSize**](ContainerExecRequestTerminalSize.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_exec_request import ContainerExecRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerExecRequest from a JSON string
container_exec_request_instance = ContainerExecRequest.from_json(json)
# print the JSON string representation of the object
print(ContainerExecRequest.to_json())

# convert the object into a dict
container_exec_request_dict = container_exec_request_instance.to_dict()
# create an instance of ContainerExecRequest from a dict
container_exec_request_from_dict = ContainerExecRequest.from_dict(container_exec_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


