# LongTermEnvironmentMutableProperties

An object that represents a set of mutable long-term environment resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_configuration** | [**LongTermStorageConfigurationMutableProperties**](LongTermStorageConfigurationMutableProperties.md) |  | [optional] 
**warm_store_configuration** | [**WarmStoreConfigurationProperties**](WarmStoreConfigurationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.long_term_environment_mutable_properties import LongTermEnvironmentMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermEnvironmentMutableProperties from a JSON string
long_term_environment_mutable_properties_instance = LongTermEnvironmentMutableProperties.from_json(json)
# print the JSON string representation of the object
print(LongTermEnvironmentMutableProperties.to_json())

# convert the object into a dict
long_term_environment_mutable_properties_dict = long_term_environment_mutable_properties_instance.to_dict()
# create an instance of LongTermEnvironmentMutableProperties from a dict
long_term_environment_mutable_properties_from_dict = LongTermEnvironmentMutableProperties.from_dict(long_term_environment_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


