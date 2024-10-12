# RegistryCreateParameters

The parameters for creating a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the container registry. This cannot be changed after the resource is created. | 
**properties** | [**RegistryPropertiesCreateParameters**](RegistryPropertiesCreateParameters.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**tags** | **Dict[str, str]** | The tags for the container registry. | [optional] 

## Example

```python
from openapi_client.models.registry_create_parameters import RegistryCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryCreateParameters from a JSON string
registry_create_parameters_instance = RegistryCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RegistryCreateParameters.to_json())

# convert the object into a dict
registry_create_parameters_dict = registry_create_parameters_instance.to_dict()
# create an instance of RegistryCreateParameters from a dict
registry_create_parameters_from_dict = RegistryCreateParameters.from_dict(registry_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


