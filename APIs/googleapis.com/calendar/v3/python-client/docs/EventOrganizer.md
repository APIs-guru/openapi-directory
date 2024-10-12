# EventOrganizer

The organizer of the event. If the organizer is also an attendee, this is indicated with a separate entry in attendees with the organizer field set to True. To change the organizer, use the move operation. Read-only, except when importing an event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The organizer&#39;s name, if available. | [optional] 
**email** | **str** | The organizer&#39;s email address, if available. It must be a valid email address as per RFC5322. | [optional] 
**id** | **str** | The organizer&#39;s Profile ID, if available. | [optional] 
**var_self** | **bool** | Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False. | [optional] [default to False]

## Example

```python
from openapi_client.models.event_organizer import EventOrganizer

# TODO update the JSON string below
json = "{}"
# create an instance of EventOrganizer from a JSON string
event_organizer_instance = EventOrganizer.from_json(json)
# print the JSON string representation of the object
print(EventOrganizer.to_json())

# convert the object into a dict
event_organizer_dict = event_organizer_instance.to_dict()
# create an instance of EventOrganizer from a dict
event_organizer_from_dict = EventOrganizer.from_dict(event_organizer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


