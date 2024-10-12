# ChaosRestartNodeFaultCompletedEvent

Chaos Restart Node Fault Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**node_instance_id** | **int** | Id of Node instance. | 

## Example

```python
from openapi_client.models.chaos_restart_node_fault_completed_event import ChaosRestartNodeFaultCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosRestartNodeFaultCompletedEvent from a JSON string
chaos_restart_node_fault_completed_event_instance = ChaosRestartNodeFaultCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosRestartNodeFaultCompletedEvent.to_json())

# convert the object into a dict
chaos_restart_node_fault_completed_event_dict = chaos_restart_node_fault_completed_event_instance.to_dict()
# create an instance of ChaosRestartNodeFaultCompletedEvent from a dict
chaos_restart_node_fault_completed_event_from_dict = ChaosRestartNodeFaultCompletedEvent.from_dict(chaos_restart_node_fault_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


