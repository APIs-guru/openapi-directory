# ChaosStoppedEvent

Chaos Stopped event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Describes reason. | 

## Example

```python
from openapi_client.models.chaos_stopped_event import ChaosStoppedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosStoppedEvent from a JSON string
chaos_stopped_event_instance = ChaosStoppedEvent.from_json(json)
# print the JSON string representation of the object
print(ChaosStoppedEvent.to_json())

# convert the object into a dict
chaos_stopped_event_dict = chaos_stopped_event_instance.to_dict()
# create an instance of ChaosStoppedEvent from a dict
chaos_stopped_event_from_dict = ChaosStoppedEvent.from_dict(chaos_stopped_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


