# ContainerExec

The container execution command, for liveness or readiness probe

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **List[str]** | The commands to execute within the container. | [optional] 

## Example

```python
from openapi_client.models.container_exec import ContainerExec

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerExec from a JSON string
container_exec_instance = ContainerExec.from_json(json)
# print the JSON string representation of the object
print(ContainerExec.to_json())

# convert the object into a dict
container_exec_dict = container_exec_instance.to_dict()
# create an instance of ContainerExec from a dict
container_exec_from_dict = ContainerExec.from_dict(container_exec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


