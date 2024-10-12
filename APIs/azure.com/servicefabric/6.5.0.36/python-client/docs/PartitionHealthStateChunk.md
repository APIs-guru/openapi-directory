# PartitionHealthStateChunk

Represents the health state chunk of a partition, which contains the partition ID, its aggregated health state and any replicas that respect the filters in the cluster health chunk query description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**replica_health_state_chunks** | [**ReplicaHealthStateChunkList**](ReplicaHealthStateChunkList.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_health_state_chunk import PartitionHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionHealthStateChunk from a JSON string
partition_health_state_chunk_instance = PartitionHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(PartitionHealthStateChunk.to_json())

# convert the object into a dict
partition_health_state_chunk_dict = partition_health_state_chunk_instance.to_dict()
# create an instance of PartitionHealthStateChunk from a dict
partition_health_state_chunk_from_dict = PartitionHealthStateChunk.from_dict(partition_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


