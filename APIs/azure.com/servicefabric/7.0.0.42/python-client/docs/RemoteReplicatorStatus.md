# RemoteReplicatorStatus

Represents the state of the secondary replicator from the primary replicator’s point of view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_in_build** | **bool** | A value that indicates whether the secondary replica is in the process of being built. | [optional] 
**last_acknowledgement_processed_time_utc** | **datetime** | The last timestamp (in UTC) when an acknowledgement from the secondary replicator was processed on the primary. UTC 0 represents an invalid value, indicating that no acknowledgement messages were ever processed. | [optional] 
**last_applied_copy_sequence_number** | **str** | The highest copy operation sequence number that the secondary has applied to its state. A value of -1 implies that the secondary has applied all copy operations and the copy process is complete. | [optional] 
**last_applied_replication_sequence_number** | **str** | The highest replication operation sequence number that the secondary has applied to its state. | [optional] 
**last_received_copy_sequence_number** | **str** | The highest copy operation sequence number that the secondary has received from the primary. A value of -1 implies that the secondary has received all copy operations. | [optional] 
**last_received_replication_sequence_number** | **str** | The highest replication operation sequence number that the secondary has received from the primary. | [optional] 
**remote_replicator_acknowledgement_status** | [**RemoteReplicatorAcknowledgementStatus**](RemoteReplicatorAcknowledgementStatus.md) |  | [optional] 
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 

## Example

```python
from openapi_client.models.remote_replicator_status import RemoteReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteReplicatorStatus from a JSON string
remote_replicator_status_instance = RemoteReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(RemoteReplicatorStatus.to_json())

# convert the object into a dict
remote_replicator_status_dict = remote_replicator_status_instance.to_dict()
# create an instance of RemoteReplicatorStatus from a dict
remote_replicator_status_from_dict = RemoteReplicatorStatus.from_dict(remote_replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


