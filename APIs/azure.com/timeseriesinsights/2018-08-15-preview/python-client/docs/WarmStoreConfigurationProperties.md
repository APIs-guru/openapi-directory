# WarmStoreConfigurationProperties

The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_retention** | **str** | ISO8601 timespan specifying the number of days the environment&#39;s events will be available for query from the warm store. | 

## Example

```python
from openapi_client.models.warm_store_configuration_properties import WarmStoreConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WarmStoreConfigurationProperties from a JSON string
warm_store_configuration_properties_instance = WarmStoreConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(WarmStoreConfigurationProperties.to_json())

# convert the object into a dict
warm_store_configuration_properties_dict = warm_store_configuration_properties_instance.to_dict()
# create an instance of WarmStoreConfigurationProperties from a dict
warm_store_configuration_properties_from_dict = WarmStoreConfigurationProperties.from_dict(warm_store_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


