# ChaosEvent

Represents an event generated during a Chaos run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**ChaosEventKind**](ChaosEventKind.md) |  | 
**time_stamp_utc** | **datetime** |  | 

## Example

```python
from openapi_client.models.chaos_event import ChaosEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosEvent from a JSON string
chaos_event_instance = ChaosEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosEvent.to_json())

# convert the object into a dict
chaos_event_dict = chaos_event_instance.to_dict()
# create an instance of ChaosEvent from a dict
chaos_event_from_dict = ChaosEvent.from_dict(chaos_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


