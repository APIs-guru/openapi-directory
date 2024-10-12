# Replica

The replica

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**instance_id** | **str** |  | [optional] 
**last_in_build_duration_in_seconds** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**replica_id** | **str** |  | [optional] 
**replica_role** | [**ReplicaRole**](ReplicaRole.md) |  | [optional] 
**replica_status** | [**ReplicaStatus**](ReplicaStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica import Replica

# TODO update the JSON string below
json = "{}"
# create an instance of Replica from a JSON string
replica_instance = Replica.from_json(json)
# print the JSON string representation of the object
print(Replica.to_json())

# convert the object into a dict
replica_dict = replica_instance.to_dict()
# create an instance of Replica from a dict
replica_from_dict = Replica.from_dict(replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


