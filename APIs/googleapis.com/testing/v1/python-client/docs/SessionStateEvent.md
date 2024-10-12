# SessionStateEvent

A message encapsulating a series of Session states and the time that the DeviceSession first entered those states.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_time** | **str** | Output only. The time that the session_state first encountered that state. | [optional] [readonly] 
**session_state** | **str** | Output only. The session_state tracked by this event | [optional] [readonly] 
**state_message** | **str** | Output only. A human-readable message to explain the state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.session_state_event import SessionStateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SessionStateEvent from a JSON string
session_state_event_instance = SessionStateEvent.from_json(json)
# print the JSON string representation of the object
print(SessionStateEvent.to_json())

# convert the object into a dict
session_state_event_dict = session_state_event_instance.to_dict()
# create an instance of SessionStateEvent from a dict
session_state_event_from_dict = SessionStateEvent.from_dict(session_state_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


