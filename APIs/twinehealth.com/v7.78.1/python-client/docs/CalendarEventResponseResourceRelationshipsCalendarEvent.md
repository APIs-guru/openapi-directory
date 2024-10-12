# CalendarEventResponseResourceRelationshipsCalendarEvent

The calendar_event is the calendar event for which the calendar event response is created specificially for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | 
**links** | [**CalendarEventResponseResourceRelationshipsCalendarEventLinks**](CalendarEventResponseResourceRelationshipsCalendarEventLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_response_resource_relationships_calendar_event import CalendarEventResponseResourceRelationshipsCalendarEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResponseResourceRelationshipsCalendarEvent from a JSON string
calendar_event_response_resource_relationships_calendar_event_instance = CalendarEventResponseResourceRelationshipsCalendarEvent.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResponseResourceRelationshipsCalendarEvent.to_json())

# convert the object into a dict
calendar_event_response_resource_relationships_calendar_event_dict = calendar_event_response_resource_relationships_calendar_event_instance.to_dict()
# create an instance of CalendarEventResponseResourceRelationshipsCalendarEvent from a dict
calendar_event_response_resource_relationships_calendar_event_from_dict = CalendarEventResponseResourceRelationshipsCalendarEvent.from_dict(calendar_event_response_resource_relationships_calendar_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


