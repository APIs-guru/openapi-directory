# ServiceHealthPartitionHealthStatesInner

The states of the partition health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**partition_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_health_partition_health_states_inner import ServiceHealthPartitionHealthStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthPartitionHealthStatesInner from a JSON string
service_health_partition_health_states_inner_instance = ServiceHealthPartitionHealthStatesInner.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthPartitionHealthStatesInner.to_json())

# convert the object into a dict
service_health_partition_health_states_inner_dict = service_health_partition_health_states_inner_instance.to_dict()
# create an instance of ServiceHealthPartitionHealthStatesInner from a dict
service_health_partition_health_states_inner_from_dict = ServiceHealthPartitionHealthStatesInner.from_dict(service_health_partition_health_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


