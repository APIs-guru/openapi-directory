# ConfigurationStoreProperties

The properties of a configuration store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of configuration store. | [optional] [readonly] 
**encryption** | [**EncryptionProperties**](EncryptionProperties.md) |  | [optional] 
**endpoint** | **str** | The DNS endpoint where the configuration store API will be available. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the configuration store. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_store_properties import ConfigurationStoreProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStoreProperties from a JSON string
configuration_store_properties_instance = ConfigurationStoreProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStoreProperties.to_json())

# convert the object into a dict
configuration_store_properties_dict = configuration_store_properties_instance.to_dict()
# create an instance of ConfigurationStoreProperties from a dict
configuration_store_properties_from_dict = ConfigurationStoreProperties.from_dict(configuration_store_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


