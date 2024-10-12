# Container

A container instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The user-provided name of the container instance. | 
**properties** | [**ContainerProperties**](ContainerProperties.md) |  | 

## Example

```python
from openapi_client.models.container import Container

# TODO update the JSON string below
json = "{}"
# create an instance of Container from a JSON string
container_instance = Container.from_json(json)
# print the JSON string representation of the object
print(Container.to_json())

# convert the object into a dict
container_dict = container_instance.to_dict()
# create an instance of Container from a dict
container_from_dict = Container.from_dict(container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


