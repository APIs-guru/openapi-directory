# DeployedReplicaDetailReplicatorStatusReplicationQueueStatus

The status of the replication queue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**committed_sequence_number** | **str** |  | [optional] 
**completed_sequence_number** | **str** |  | [optional] 
**first_sequence_number** | **str** |  | [optional] 
**last_sequence_number** | **str** |  | [optional] 
**queue_memory_size** | **str** |  | [optional] 
**queue_utilization_percentage** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_replica_detail_replicator_status_replication_queue_status import DeployedReplicaDetailReplicatorStatusReplicationQueueStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedReplicaDetailReplicatorStatusReplicationQueueStatus from a JSON string
deployed_replica_detail_replicator_status_replication_queue_status_instance = DeployedReplicaDetailReplicatorStatusReplicationQueueStatus.from_json(json)
# print the JSON string representation of the object
print(DeployedReplicaDetailReplicatorStatusReplicationQueueStatus.to_json())

# convert the object into a dict
deployed_replica_detail_replicator_status_replication_queue_status_dict = deployed_replica_detail_replicator_status_replication_queue_status_instance.to_dict()
# create an instance of DeployedReplicaDetailReplicatorStatusReplicationQueueStatus from a dict
deployed_replica_detail_replicator_status_replication_queue_status_from_dict = DeployedReplicaDetailReplicatorStatusReplicationQueueStatus.from_dict(deployed_replica_detail_replicator_status_replication_queue_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


