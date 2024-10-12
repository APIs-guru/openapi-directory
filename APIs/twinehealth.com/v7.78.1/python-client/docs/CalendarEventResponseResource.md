# CalendarEventResponseResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CalendarEventResponseResourceAttributes**](CalendarEventResponseResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**CalendarEventResponseResourceLinks**](CalendarEventResponseResourceLinks.md) |  | [optional] 
**relationships** | [**CalendarEventResponseResourceRelationships**](CalendarEventResponseResourceRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_response_resource import CalendarEventResponseResource

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResponseResource from a JSON string
calendar_event_response_resource_instance = CalendarEventResponseResource.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResponseResource.to_json())

# convert the object into a dict
calendar_event_response_resource_dict = calendar_event_response_resource_instance.to_dict()
# create an instance of CalendarEventResponseResource from a dict
calendar_event_response_resource_from_dict = CalendarEventResponseResource.from_dict(calendar_event_response_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


