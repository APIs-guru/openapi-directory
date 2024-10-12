# CalendarEventResponseResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attendee** | **object** | The attendee in the attendees list of the calendar event. | [optional] 
**response_status** | **str** | The response status for the attendee. | [optional] 

## Example

```python
from openapi_client.models.calendar_event_response_resource_attributes import CalendarEventResponseResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResponseResourceAttributes from a JSON string
calendar_event_response_resource_attributes_instance = CalendarEventResponseResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResponseResourceAttributes.to_json())

# convert the object into a dict
calendar_event_response_resource_attributes_dict = calendar_event_response_resource_attributes_instance.to_dict()
# create an instance of CalendarEventResponseResourceAttributes from a dict
calendar_event_response_resource_attributes_from_dict = CalendarEventResponseResourceAttributes.from_dict(calendar_event_response_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


