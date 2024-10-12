# Registry

An object that represents a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**properties** | [**RegistryProperties**](RegistryProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.registry import Registry

# TODO update the JSON string below
json = "{}"
# create an instance of Registry from a JSON string
registry_instance = Registry.from_json(json)
# print the JSON string representation of the object
print(Registry.to_json())

# convert the object into a dict
registry_dict = registry_instance.to_dict()
# create an instance of Registry from a dict
registry_from_dict = Registry.from_dict(registry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


