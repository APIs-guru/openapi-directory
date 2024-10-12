# RegistryPropertiesUpdateParameters

The parameters for updating the properties of a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user_enabled** | **bool** | The value that indicates whether the admin user is enabled. | [optional] 
**network_rule_set** | [**NetworkRuleSet**](NetworkRuleSet.md) |  | [optional] 
**storage_account** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.registry_properties_update_parameters import RegistryPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryPropertiesUpdateParameters from a JSON string
registry_properties_update_parameters_instance = RegistryPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RegistryPropertiesUpdateParameters.to_json())

# convert the object into a dict
registry_properties_update_parameters_dict = registry_properties_update_parameters_instance.to_dict()
# create an instance of RegistryPropertiesUpdateParameters from a dict
registry_properties_update_parameters_from_dict = RegistryPropertiesUpdateParameters.from_dict(registry_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


