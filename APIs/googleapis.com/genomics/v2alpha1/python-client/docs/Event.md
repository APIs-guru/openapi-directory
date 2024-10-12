# Event

Carries information about events that occur during pipeline execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the &#x60;details&#x60; field. | [optional] 
**details** | **Dict[str, object]** | Machine-readable details about the event. | [optional] 
**timestamp** | **str** | The time at which the event occurred. | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


