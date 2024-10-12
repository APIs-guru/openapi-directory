# DeployedReplicaDetailReplicatorStatus

The status of the replicator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **int** |  | [optional] 
**replication_queue_status** | [**DeployedReplicaDetailReplicatorStatusReplicationQueueStatus**](DeployedReplicaDetailReplicatorStatusReplicationQueueStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_replica_detail_replicator_status import DeployedReplicaDetailReplicatorStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedReplicaDetailReplicatorStatus from a JSON string
deployed_replica_detail_replicator_status_instance = DeployedReplicaDetailReplicatorStatus.from_json(json)
# print the JSON string representation of the object
print(DeployedReplicaDetailReplicatorStatus.to_json())

# convert the object into a dict
deployed_replica_detail_replicator_status_dict = deployed_replica_detail_replicator_status_instance.to_dict()
# create an instance of DeployedReplicaDetailReplicatorStatus from a dict
deployed_replica_detail_replicator_status_from_dict = DeployedReplicaDetailReplicatorStatus.from_dict(deployed_replica_detail_replicator_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


