# DeployedStatefulServiceReplicaInfo

Information about a stateful service replica deployed on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reconfiguration_information** | [**ReconfigurationInformation**](ReconfigurationInformation.md) |  | [optional] 
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 
**replica_role** | [**ReplicaRole**](ReplicaRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_stateful_service_replica_info import DeployedStatefulServiceReplicaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedStatefulServiceReplicaInfo from a JSON string
deployed_stateful_service_replica_info_instance = DeployedStatefulServiceReplicaInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedStatefulServiceReplicaInfo.to_json())

# convert the object into a dict
deployed_stateful_service_replica_info_dict = deployed_stateful_service_replica_info_instance.to_dict()
# create an instance of DeployedStatefulServiceReplicaInfo from a dict
deployed_stateful_service_replica_info_from_dict = DeployedStatefulServiceReplicaInfo.from_dict(deployed_stateful_service_replica_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


