# ChaosRestartReplicaFaultScheduledEvent

Chaos Restart Replica Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**service_uri** | **str** | Service name. | 

## Example

```python
from openapi_client.models.chaos_restart_replica_fault_scheduled_event import ChaosRestartReplicaFaultScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosRestartReplicaFaultScheduledEvent from a JSON string
chaos_restart_replica_fault_scheduled_event_instance = ChaosRestartReplicaFaultScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosRestartReplicaFaultScheduledEvent.to_json())

# convert the object into a dict
chaos_restart_replica_fault_scheduled_event_dict = chaos_restart_replica_fault_scheduled_event_instance.to_dict()
# create an instance of ChaosRestartReplicaFaultScheduledEvent from a dict
chaos_restart_replica_fault_scheduled_event_from_dict = ChaosRestartReplicaFaultScheduledEvent.from_dict(chaos_restart_replica_fault_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


