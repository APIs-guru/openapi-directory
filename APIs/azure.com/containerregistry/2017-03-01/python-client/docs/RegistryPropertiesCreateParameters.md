# RegistryPropertiesCreateParameters

The parameters for creating the properties of a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user_enabled** | **bool** | The value that indicates whether the admin user is enabled. | [optional] [default to False]
**storage_account** | [**StorageAccountParameters**](StorageAccountParameters.md) |  | 

## Example

```python
from openapi_client.models.registry_properties_create_parameters import RegistryPropertiesCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryPropertiesCreateParameters from a JSON string
registry_properties_create_parameters_instance = RegistryPropertiesCreateParameters.from_json(json)
# print the JSON string representation of the object
print(RegistryPropertiesCreateParameters.to_json())

# convert the object into a dict
registry_properties_create_parameters_dict = registry_properties_create_parameters_instance.to_dict()
# create an instance of RegistryPropertiesCreateParameters from a dict
registry_properties_create_parameters_from_dict = RegistryPropertiesCreateParameters.from_dict(registry_properties_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


