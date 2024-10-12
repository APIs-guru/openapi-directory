# CalendarEventResourceAttributesAttendeesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_status** | **str** | Status of responses from attendees | [optional] 
**user** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_resource_attributes_attendees_inner import CalendarEventResourceAttributesAttendeesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResourceAttributesAttendeesInner from a JSON string
calendar_event_resource_attributes_attendees_inner_instance = CalendarEventResourceAttributesAttendeesInner.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResourceAttributesAttendeesInner.to_json())

# convert the object into a dict
calendar_event_resource_attributes_attendees_inner_dict = calendar_event_resource_attributes_attendees_inner_instance.to_dict()
# create an instance of CalendarEventResourceAttributesAttendeesInner from a dict
calendar_event_resource_attributes_attendees_inner_from_dict = CalendarEventResourceAttributesAttendeesInner.from_dict(calendar_event_resource_attributes_attendees_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


