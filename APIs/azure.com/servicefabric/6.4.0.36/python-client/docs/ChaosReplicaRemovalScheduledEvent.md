# ChaosReplicaRemovalScheduledEvent

Chaos Remove Replica Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**service_uri** | **str** | Service name. | 

## Example

```python
from openapi_client.models.chaos_replica_removal_scheduled_event import ChaosReplicaRemovalScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosReplicaRemovalScheduledEvent from a JSON string
chaos_replica_removal_scheduled_event_instance = ChaosReplicaRemovalScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosReplicaRemovalScheduledEvent.to_json())

# convert the object into a dict
chaos_replica_removal_scheduled_event_dict = chaos_replica_removal_scheduled_event_instance.to_dict()
# create an instance of ChaosReplicaRemovalScheduledEvent from a dict
chaos_replica_removal_scheduled_event_from_dict = ChaosReplicaRemovalScheduledEvent.from_dict(chaos_replica_removal_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


