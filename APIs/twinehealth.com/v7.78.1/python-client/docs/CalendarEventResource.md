# CalendarEventResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CalendarEventResourceAttributes**](CalendarEventResourceAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**CalendarEventResourceLinks**](CalendarEventResourceLinks.md) |  | [optional] 
**relationships** | [**CalendarEventResourceRelationships**](CalendarEventResourceRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.calendar_event_resource import CalendarEventResource

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarEventResource from a JSON string
calendar_event_resource_instance = CalendarEventResource.from_json(json)
# print the JSON string representation of the object
print(CalendarEventResource.to_json())

# convert the object into a dict
calendar_event_resource_dict = calendar_event_resource_instance.to_dict()
# create an instance of CalendarEventResource from a dict
calendar_event_resource_from_dict = CalendarEventResource.from_dict(calendar_event_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


