# ConfigurationStorePropertiesUpdateParameters

The properties for updating a configuration store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption** | [**EncryptionProperties**](EncryptionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.configuration_store_properties_update_parameters import ConfigurationStorePropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStorePropertiesUpdateParameters from a JSON string
configuration_store_properties_update_parameters_instance = ConfigurationStorePropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStorePropertiesUpdateParameters.to_json())

# convert the object into a dict
configuration_store_properties_update_parameters_dict = configuration_store_properties_update_parameters_instance.to_dict()
# create an instance of ConfigurationStorePropertiesUpdateParameters from a dict
configuration_store_properties_update_parameters_from_dict = ConfigurationStorePropertiesUpdateParameters.from_dict(configuration_store_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


