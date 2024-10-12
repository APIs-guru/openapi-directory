# ChaosMoveSecondaryFaultScheduledEvent

Chaos Move Secondary Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_node** | **str** | The name of a Service Fabric node. | 
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**forced_move** | **bool** | Indicates a forced move. | 
**service_name** | **str** | Service name. | 
**source_node** | **str** | The name of a Service Fabric node. | 

## Example

```python
from openapi_client.models.chaos_move_secondary_fault_scheduled_event import ChaosMoveSecondaryFaultScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosMoveSecondaryFaultScheduledEvent from a JSON string
chaos_move_secondary_fault_scheduled_event_instance = ChaosMoveSecondaryFaultScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosMoveSecondaryFaultScheduledEvent.to_json())

# convert the object into a dict
chaos_move_secondary_fault_scheduled_event_dict = chaos_move_secondary_fault_scheduled_event_instance.to_dict()
# create an instance of ChaosMoveSecondaryFaultScheduledEvent from a dict
chaos_move_secondary_fault_scheduled_event_from_dict = ChaosMoveSecondaryFaultScheduledEvent.from_dict(chaos_move_secondary_fault_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


