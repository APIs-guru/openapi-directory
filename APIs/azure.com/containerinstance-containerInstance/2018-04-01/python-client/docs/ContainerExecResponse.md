# ContainerExecResponse

The information for the container exec command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password to start the exec command. | [optional] [readonly] 
**web_socket_uri** | **str** | The uri for the exec websocket. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_exec_response import ContainerExecResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerExecResponse from a JSON string
container_exec_response_instance = ContainerExecResponse.from_json(json)
# print the JSON string representation of the object
print(ContainerExecResponse.to_json())

# convert the object into a dict
container_exec_response_dict = container_exec_response_instance.to_dict()
# create an instance of ContainerExecResponse from a dict
container_exec_response_from_dict = ContainerExecResponse.from_dict(container_exec_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


