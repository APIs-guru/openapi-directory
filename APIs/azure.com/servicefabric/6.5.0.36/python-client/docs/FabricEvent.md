# FabricEvent

Represents the base for all Fabric Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of event. | [optional] 
**event_instance_id** | **str** | The identifier for the FabricEvent instance. | 
**has_correlated_events** | **bool** | Shows there is existing related events available. | [optional] 
**kind** | [**FabricEventKind**](FabricEventKind.md) |  | 
**time_stamp** | **datetime** | The time event was logged. | 

## Example

```python
from openapi_client.models.fabric_event import FabricEvent

# TODO update the JSON string below
json = "{}"
# create an instance of FabricEvent from a JSON string
fabric_event_instance = FabricEvent.from_json(json)
# print the JSON string representation of the object
print(FabricEvent.to_json())

# convert the object into a dict
fabric_event_dict = fabric_event_instance.to_dict()
# create an instance of FabricEvent from a dict
fabric_event_from_dict = FabricEvent.from_dict(fabric_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


