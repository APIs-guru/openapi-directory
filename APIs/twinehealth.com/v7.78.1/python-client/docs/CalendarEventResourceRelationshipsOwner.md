# CalendarEventResourceRelationshipsOwner

The owner is the patient for whom the calendar event is created specificially for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ActionResourceRelationshipsPlanData**](ActionResourceRelationshipsPlanData.md) |  | 
**links** | [**CalendarEventResourceRelationshipsOwnerLinks**](CalendarEventResourceRelationshipsOwnerLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_resource_relationships_owner import CalendarEventResourceRelationshipsOwner

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResourceRelationshipsOwner from a JSON string
calendar_event_resource_relationships_owner_instance = CalendarEventResourceRelationshipsOwner.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResourceRelationshipsOwner.to_json())

# convert the object into a dict
calendar_event_resource_relationships_owner_dict = calendar_event_resource_relationships_owner_instance.to_dict()
# create an instance of CalendarEventResourceRelationshipsOwner from a dict
calendar_event_resource_relationships_owner_from_dict = CalendarEventResourceRelationshipsOwner.from_dict(calendar_event_resource_relationships_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


