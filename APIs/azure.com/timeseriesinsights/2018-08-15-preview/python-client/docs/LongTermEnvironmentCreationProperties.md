# LongTermEnvironmentCreationProperties

Properties used to create a long-term environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_configuration** | [**LongTermStorageConfigurationInput**](LongTermStorageConfigurationInput.md) |  | 
**time_series_id_properties** | [**List[TimeSeriesIdProperty]**](TimeSeriesIdProperty.md) | The list of event properties which will be used to define the environment&#39;s time series id. | 
**warm_store_configuration** | [**WarmStoreConfigurationProperties**](WarmStoreConfigurationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.long_term_environment_creation_properties import LongTermEnvironmentCreationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermEnvironmentCreationProperties from a JSON string
long_term_environment_creation_properties_instance = LongTermEnvironmentCreationProperties.from_json(json)
# print the JSON string representation of the object
print(LongTermEnvironmentCreationProperties.to_json())

# convert the object into a dict
long_term_environment_creation_properties_dict = long_term_environment_creation_properties_instance.to_dict()
# create an instance of LongTermEnvironmentCreationProperties from a dict
long_term_environment_creation_properties_from_dict = LongTermEnvironmentCreationProperties.from_dict(long_term_environment_creation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


