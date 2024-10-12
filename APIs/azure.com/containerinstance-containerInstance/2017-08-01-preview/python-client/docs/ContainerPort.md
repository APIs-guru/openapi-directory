# ContainerPort

The port exposed on the container instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | The port number exposed within the container group. | 

## Example

```python
from openapi_client.models.container_port import ContainerPort

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerPort from a JSON string
container_port_instance = ContainerPort.from_json(json)
# print the JSON string representation of the object
print(ContainerPort.to_json())

# convert the object into a dict
container_port_dict = container_port_instance.to_dict()
# create an instance of ContainerPort from a dict
container_port_from_dict = ContainerPort.from_dict(container_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


