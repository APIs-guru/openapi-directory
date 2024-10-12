# CalendarEventResourceRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | [**CalendarEventResourceRelationshipsOwner**](CalendarEventResourceRelationshipsOwner.md) |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_resource_relationships import CalendarEventResourceRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResourceRelationships from a JSON string
calendar_event_resource_relationships_instance = CalendarEventResourceRelationships.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResourceRelationships.to_json())

# convert the object into a dict
calendar_event_resource_relationships_dict = calendar_event_resource_relationships_instance.to_dict()
# create an instance of CalendarEventResourceRelationships from a dict
calendar_event_resource_relationships_from_dict = CalendarEventResourceRelationships.from_dict(calendar_event_resource_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


