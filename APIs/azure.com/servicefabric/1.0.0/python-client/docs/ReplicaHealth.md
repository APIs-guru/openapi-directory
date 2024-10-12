# ReplicaHealth

The health of the replica

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**health_events** | [**List[HealthEvent]**](HealthEvent.md) |  | [optional] 
**partition_id** | **str** |  | [optional] 
**replica_id** | **str** |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica_health import ReplicaHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealth from a JSON string
replica_health_instance = ReplicaHealth.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealth.to_json())

# convert the object into a dict
replica_health_dict = replica_health_instance.to_dict()
# create an instance of ReplicaHealth from a dict
replica_health_from_dict = ReplicaHealth.from_dict(replica_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


