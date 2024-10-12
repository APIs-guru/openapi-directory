# CalendarEventResponseResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendar_event** | [**CalendarEventResponseResourceRelationshipsCalendarEvent**](CalendarEventResponseResourceRelationshipsCalendarEvent.md) |  | [optional] 
**user** | [**CalendarEventResponseResourceRelationshipsUser**](CalendarEventResponseResourceRelationshipsUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_response_resource_relationships import CalendarEventResponseResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResponseResourceRelationships from a JSON string
calendar_event_response_resource_relationships_instance = CalendarEventResponseResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResponseResourceRelationships.to_json())

# convert the object into a dict
calendar_event_response_resource_relationships_dict = calendar_event_response_resource_relationships_instance.to_dict()
# create an instance of CalendarEventResponseResourceRelationships from a dict
calendar_event_response_resource_relationships_from_dict = CalendarEventResponseResourceRelationships.from_dict(calendar_event_response_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


