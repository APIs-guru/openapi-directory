# CalendarEventResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_day** | **bool** | True if the calendar event is an all day event, false otherwise. Must be set to true for &#x60;plan-check-in&#x60; event type. If it is true, then &#x60;start_at&#x60; and &#x60;end_at&#x60; must also be set to beginning of day, except &#x60;plan-check-in&#x60; event type does not need an &#x60;end_at&#x60; date. If it is false, then &#x60;start_at&#x60; and &#x60;end_at&#x60; must be on the same day. | [optional] 
**attendees** | [**List[CalendarEventResourceAttributesAttendeesInner]**](CalendarEventResourceAttributesAttendeesInner.md) | List of attendees for the calendar event | [optional] 
**completed_at** | **str** | The date and time when the calendar event is marked as completed. Only valid for &#x60;plan-check-in&#x60; event type. | [optional] 
**completed_by** | **object** | The coach who marked the calendar event as completed. Only valid for &#x60;plan-check-in&#x60; event type. | [optional] 
**description** | **str** |  | [optional] 
**end_at** | **str** | The date and time when the calendar event ends. Not valid for &#x60;plan-check-in&#x60; event type. | [optional] 
**location** | **str** |  | [optional] 
**start_at** | **str** | The date and time when the calendar event starts | [optional] 
**time_zone** | **str** | The time zone in which the dates for the calendar event are specified | [optional] 
**title** | **str** | The title of the calendar event. Must not be empty or null | [optional] 
**type** | **str** | The type of calendar event. Immutable after event creation. | [optional] 

## Example

```python
from openapi_client.models.calendar_event_resource_attributes import CalendarEventResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResourceAttributes from a JSON string
calendar_event_resource_attributes_instance = CalendarEventResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResourceAttributes.to_json())

# convert the object into a dict
calendar_event_resource_attributes_dict = calendar_event_resource_attributes_instance.to_dict()
# create an instance of CalendarEventResourceAttributes from a dict
calendar_event_resource_attributes_from_dict = CalendarEventResourceAttributes.from_dict(calendar_event_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


