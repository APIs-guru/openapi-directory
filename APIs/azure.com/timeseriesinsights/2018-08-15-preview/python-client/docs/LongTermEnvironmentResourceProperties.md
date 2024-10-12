# LongTermEnvironmentResourceProperties

Properties of the long-term environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_configuration** | [**LongTermStorageConfigurationOutput**](LongTermStorageConfigurationOutput.md) |  | 
**time_series_id_properties** | [**List[TimeSeriesIdProperty]**](TimeSeriesIdProperty.md) | The list of event properties which will be used to define the environment&#39;s time series id. | 
**warm_store_configuration** | [**WarmStoreConfigurationProperties**](WarmStoreConfigurationProperties.md) |  | [optional] 
**data_access_fqdn** | **str** | The fully qualified domain name used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**data_access_id** | **str** | An id used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**status** | [**EnvironmentStatus**](EnvironmentStatus.md) |  | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.long_term_environment_resource_properties import LongTermEnvironmentResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermEnvironmentResourceProperties from a JSON string
long_term_environment_resource_properties_instance = LongTermEnvironmentResourceProperties.from_json(json)
# print the JSON string representation of the object
print(LongTermEnvironmentResourceProperties.to_json())

# convert the object into a dict
long_term_environment_resource_properties_dict = long_term_environment_resource_properties_instance.to_dict()
# create an instance of LongTermEnvironmentResourceProperties from a dict
long_term_environment_resource_properties_from_dict = LongTermEnvironmentResourceProperties.from_dict(long_term_environment_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


