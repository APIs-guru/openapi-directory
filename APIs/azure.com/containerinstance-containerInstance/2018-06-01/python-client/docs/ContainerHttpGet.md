# ContainerHttpGet

The container Http Get settings, for liveness or readiness probe

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path to probe. | [optional] 
**port** | **int** | The port number to probe. | 
**scheme** | **str** | The scheme. | [optional] 

## Example

```python
from openapi_client.models.container_http_get import ContainerHttpGet

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerHttpGet from a JSON string
container_http_get_instance = ContainerHttpGet.from_json(json)
# print the JSON string representation of the object
print(ContainerHttpGet.to_json())

# convert the object into a dict
container_http_get_dict = container_http_get_instance.to_dict()
# create an instance of ContainerHttpGet from a dict
container_http_get_from_dict = ContainerHttpGet.from_dict(container_http_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


