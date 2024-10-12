# ReplicaInfo

Information about the identity, status, health, node name, uptime, and other details about the replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address the replica is listening on. | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**last_in_build_duration_in_seconds** | **str** | The last in build duration of the replica in seconds. | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 
**replica_status** | [**ReplicaStatus**](ReplicaStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 

## Example

```python
from openapi_client.models.replica_info import ReplicaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaInfo from a JSON string
replica_info_instance = ReplicaInfo.from_json(json)
# print the JSON string representation of the object
print(ReplicaInfo.to_json())

# convert the object into a dict
replica_info_dict = replica_info_instance.to_dict()
# create an instance of ReplicaInfo from a dict
replica_info_from_dict = ReplicaInfo.from_dict(replica_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


