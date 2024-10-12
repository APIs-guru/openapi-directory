# ContainerRegistry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.container_registry import ContainerRegistry

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerRegistry from a JSON string
container_registry_instance = ContainerRegistry.from_json(json)
# print the JSON string representation of the object
print(ContainerRegistry.to_json())

# convert the object into a dict
container_registry_dict = container_registry_instance.to_dict()
# create an instance of ContainerRegistry from a dict
container_registry_from_dict = ContainerRegistry.from_dict(container_registry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


