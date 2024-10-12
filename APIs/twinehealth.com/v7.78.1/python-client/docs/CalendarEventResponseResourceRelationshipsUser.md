# CalendarEventResponseResourceRelationshipsUser

The user is the coach or patient for whom the calendar event response is created specificially for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | 
**links** | [**CalendarEventResponseResourceRelationshipsUserLinks**](CalendarEventResponseResourceRelationshipsUserLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_response_resource_relationships_user import CalendarEventResponseResourceRelationshipsUser

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResponseResourceRelationshipsUser from a JSON string
calendar_event_response_resource_relationships_user_instance = CalendarEventResponseResourceRelationshipsUser.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResponseResourceRelationshipsUser.to_json())

# convert the object into a dict
calendar_event_response_resource_relationships_user_dict = calendar_event_response_resource_relationships_user_instance.to_dict()
# create an instance of CalendarEventResponseResourceRelationshipsUser from a dict
calendar_event_response_resource_relationships_user_from_dict = CalendarEventResponseResourceRelationshipsUser.from_dict(calendar_event_response_resource_relationships_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


