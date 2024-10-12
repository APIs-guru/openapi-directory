# PartitionHealthReplicaHealthStatesInner

The states of the replica health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | **int** |  | [optional] 
**partition_id** | **str** |  | [optional] 
**replica_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partition_health_replica_health_states_inner import PartitionHealthReplicaHealthStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthReplicaHealthStatesInner from a JSON string
partition_health_replica_health_states_inner_instance = PartitionHealthReplicaHealthStatesInner.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthReplicaHealthStatesInner.to_json())

# convert the object into a dict
partition_health_replica_health_states_inner_dict = partition_health_replica_health_states_inner_instance.to_dict()
# create an instance of PartitionHealthReplicaHealthStatesInner from a dict
partition_health_replica_health_states_inner_from_dict = PartitionHealthReplicaHealthStatesInner.from_dict(partition_health_replica_health_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


