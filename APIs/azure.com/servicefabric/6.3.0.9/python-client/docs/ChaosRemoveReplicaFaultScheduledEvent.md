# ChaosRemoveReplicaFaultScheduledEvent

Chaos Remove Replica Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**service_uri** | **str** | Service name. | 

## Example

```python
from openapi_client.models.chaos_remove_replica_fault_scheduled_event import ChaosRemoveReplicaFaultScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosRemoveReplicaFaultScheduledEvent from a JSON string
chaos_remove_replica_fault_scheduled_event_instance = ChaosRemoveReplicaFaultScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosRemoveReplicaFaultScheduledEvent.to_json())

# convert the object into a dict
chaos_remove_replica_fault_scheduled_event_dict = chaos_remove_replica_fault_scheduled_event_instance.to_dict()
# create an instance of ChaosRemoveReplicaFaultScheduledEvent from a dict
chaos_remove_replica_fault_scheduled_event_from_dict = ChaosRemoveReplicaFaultScheduledEvent.from_dict(chaos_remove_replica_fault_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


