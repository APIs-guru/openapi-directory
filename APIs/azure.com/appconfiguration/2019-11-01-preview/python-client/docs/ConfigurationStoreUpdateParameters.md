# ConfigurationStoreUpdateParameters

The parameters for updating a configuration store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**ResourceIdentity**](ResourceIdentity.md) |  | [optional] 
**properties** | [**ConfigurationStorePropertiesUpdateParameters**](ConfigurationStorePropertiesUpdateParameters.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | The ARM resource tags. | [optional] 

## Example

```python
from openapi_client.models.configuration_store_update_parameters import ConfigurationStoreUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStoreUpdateParameters from a JSON string
configuration_store_update_parameters_instance = ConfigurationStoreUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStoreUpdateParameters.to_json())

# convert the object into a dict
configuration_store_update_parameters_dict = configuration_store_update_parameters_instance.to_dict()
# create an instance of ConfigurationStoreUpdateParameters from a dict
configuration_store_update_parameters_from_dict = ConfigurationStoreUpdateParameters.from_dict(configuration_store_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


