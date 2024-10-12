# StandardEnvironmentResourceProperties

Properties of the standard environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_retention_time** | **str** | ISO8601 timespan specifying the minimum number of days the environment&#39;s events will be available for query. | 
**partition_key_properties** | [**List[TimeSeriesIdProperty]**](TimeSeriesIdProperty.md) | The list of event properties which will be used to partition data in the environment. | [optional] 
**storage_limit_exceeded_behavior** | **str** | The behavior the Time Series Insights service should take when the environment&#39;s capacity has been exceeded. If \&quot;PauseIngress\&quot; is specified, new events will not be read from the event source. If \&quot;PurgeOldData\&quot; is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData. | [optional] 
**data_access_fqdn** | **str** | The fully qualified domain name used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**data_access_id** | **str** | An id used to access the environment data, e.g. to query the environment&#39;s events or upload reference data for the environment. | [optional] [readonly] 
**status** | [**EnvironmentStatus**](EnvironmentStatus.md) |  | [optional] 
**creation_time** | **datetime** | The time the resource was created. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.standard_environment_resource_properties import StandardEnvironmentResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StandardEnvironmentResourceProperties from a JSON string
standard_environment_resource_properties_instance = StandardEnvironmentResourceProperties.from_json(json)
# print the JSON string representation of the object
print(StandardEnvironmentResourceProperties.to_json())

# convert the object into a dict
standard_environment_resource_properties_dict = standard_environment_resource_properties_instance.to_dict()
# create an instance of StandardEnvironmentResourceProperties from a dict
standard_environment_resource_properties_from_dict = StandardEnvironmentResourceProperties.from_dict(standard_environment_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


