# ReplicaHealthStateChunk

Represents the health state chunk of a stateful service replica or a stateless service instance. The replica health state contains the replica ID and its aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replica_or_instance_id** | **str** | Id of a stateful service replica or a stateless service instance. This ID is used in the queries that apply to both stateful and stateless services. It is used by Service Fabric to uniquely identify a replica of a partition of a stateful service or an instance of a stateless service partition. It is unique within a partition and does not change for the lifetime of the replica or the instance. If a stateful replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the ID. If a stateless instance is failed over on the same or different node it will get a different value for the ID. | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica_health_state_chunk import ReplicaHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealthStateChunk from a JSON string
replica_health_state_chunk_instance = ReplicaHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealthStateChunk.to_json())

# convert the object into a dict
replica_health_state_chunk_dict = replica_health_state_chunk_instance.to_dict()
# create an instance of ReplicaHealthStateChunk from a dict
replica_health_state_chunk_from_dict = ReplicaHealthStateChunk.from_dict(replica_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


