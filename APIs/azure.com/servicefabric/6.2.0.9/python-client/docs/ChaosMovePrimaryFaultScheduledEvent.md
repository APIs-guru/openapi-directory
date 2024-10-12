# ChaosMovePrimaryFaultScheduledEvent

Chaos Move Primary Fault Scheduled event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_group_id** | **str** | Id of fault group. | 
**fault_id** | **str** | Id of fault. | 
**forced_move** | **bool** | Indicates a forced move. | 
**node_to** | **str** | The name of a Service Fabric node. | 
**service_name** | **str** | Service name. | 

## Example

```python
from openapi_client.models.chaos_move_primary_fault_scheduled_event import ChaosMovePrimaryFaultScheduledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosMovePrimaryFaultScheduledEvent from a JSON string
chaos_move_primary_fault_scheduled_event_instance = ChaosMovePrimaryFaultScheduledEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosMovePrimaryFaultScheduledEvent.to_json())

# convert the object into a dict
chaos_move_primary_fault_scheduled_event_dict = chaos_move_primary_fault_scheduled_event_instance.to_dict()
# create an instance of ChaosMovePrimaryFaultScheduledEvent from a dict
chaos_move_primary_fault_scheduled_event_from_dict = ChaosMovePrimaryFaultScheduledEvent.from_dict(chaos_move_primary_fault_scheduled_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


