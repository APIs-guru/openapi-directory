# StatefulServiceReplicaInfo

Represents a stateful service replica. This includes information about the identity, role, status, health, node name, uptime, and other details about the replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replica_id** | **str** | Id of a stateful service replica. ReplicaId is used by Service Fabric to uniquely identify a replica of a partition. It is unique within a partition and does not change for the lifetime of the replica. If a replica gets dropped and another replica gets created on the same node for the same partition, it will get a different value for the id. Sometimes the id of a stateless service instance is also referred as a replica id. | [optional] 
**replica_role** | [**ReplicaRole**](ReplicaRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.stateful_service_replica_info import StatefulServiceReplicaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceReplicaInfo from a JSON string
stateful_service_replica_info_instance = StatefulServiceReplicaInfo.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceReplicaInfo.to_json())

# convert the object into a dict
stateful_service_replica_info_dict = stateful_service_replica_info_instance.to_dict()
# create an instance of StatefulServiceReplicaInfo from a dict
stateful_service_replica_info_from_dict = StatefulServiceReplicaInfo.from_dict(stateful_service_replica_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


