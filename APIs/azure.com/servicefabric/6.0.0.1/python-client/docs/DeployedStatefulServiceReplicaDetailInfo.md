# DeployedStatefulServiceReplicaDetailInfo

Information about a stateful replica running in a code package. Please note DeployedServiceReplicaQueryResult will contain duplicate data like ServiceKind, ServiceName, PartitionId and replicaId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_replicator_operation** | [**ReplicatorOperationName**](ReplicatorOperationName.md) |  | [optional] 
**deployed_service_replica_query_result** | [**DeployedStatefulServiceReplicaInfo**](DeployedStatefulServiceReplicaInfo.md) |  | [optional] 
**read_status** | [**PartitionAccessStatus**](PartitionAccessStatus.md) |  | [optional] 
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 
**replica_status** | [**KeyValueStoreReplicaStatus**](KeyValueStoreReplicaStatus.md) |  | [optional] 
**replicator_status** | [**ReplicatorStatus**](ReplicatorStatus.md) |  | [optional] 
**write_status** | [**PartitionAccessStatus**](PartitionAccessStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_stateful_service_replica_detail_info import DeployedStatefulServiceReplicaDetailInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedStatefulServiceReplicaDetailInfo from a JSON string
deployed_stateful_service_replica_detail_info_instance = DeployedStatefulServiceReplicaDetailInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedStatefulServiceReplicaDetailInfo.to_json())

# convert the object into a dict
deployed_stateful_service_replica_detail_info_dict = deployed_stateful_service_replica_detail_info_instance.to_dict()
# create an instance of DeployedStatefulServiceReplicaDetailInfo from a dict
deployed_stateful_service_replica_detail_info_from_dict = DeployedStatefulServiceReplicaDetailInfo.from_dict(deployed_stateful_service_replica_detail_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


