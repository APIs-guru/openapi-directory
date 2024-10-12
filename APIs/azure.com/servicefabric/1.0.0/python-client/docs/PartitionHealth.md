# PartitionHealth

The health of the partition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**partition_id** | **str** |  | [optional] 
**replica_health_states** | [**List[PartitionHealthReplicaHealthStatesInner]**](PartitionHealthReplicaHealthStatesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_health import PartitionHealth

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealth from a JSON string
partition_health_instance = PartitionHealth.from_json(json)
# print the JSON string representation of the object
print(PartitionHealth.to_json())

# convert the object into a dict
partition_health_dict = partition_health_instance.to_dict()
# create an instance of PartitionHealth from a dict
partition_health_from_dict = PartitionHealth.from_dict(partition_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


