# ChaosNodeRestartScheduledEvent

Chaos Restart Node Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**node_instance_id** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.chaos_node_restart_scheduled_event import ChaosNodeRestartScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosNodeRestartScheduledEvent from a JSON string
chaos_node_restart_scheduled_event_instance = ChaosNodeRestartScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosNodeRestartScheduledEvent.to_json())

# convert the object into a dict
chaos_node_restart_scheduled_event_dict = chaos_node_restart_scheduled_event_instance.to_dict()
# create an instance of ChaosNodeRestartScheduledEvent from a dict
chaos_node_restart_scheduled_event_from_dict = ChaosNodeRestartScheduledEvent.from_dict(chaos_node_restart_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


