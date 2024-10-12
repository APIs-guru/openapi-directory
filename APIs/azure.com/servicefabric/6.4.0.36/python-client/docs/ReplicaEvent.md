# ReplicaEvent

Represents the base for all Replica Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | 
**replica_id** | **int** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | 

## Example

```python
from openapi_client.models.replica_event import ReplicaEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaEvent from a JSON string
replica_event_instance = ReplicaEvent.from_json(json)
# print the JSON string representation of the object
print(ReplicaEvent.to_json())

# convert the object into a dict
replica_event_dict = replica_event_instance.to_dict()
# create an instance of ReplicaEvent from a dict
replica_event_from_dict = ReplicaEvent.from_dict(replica_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


