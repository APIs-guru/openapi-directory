# CalendarResource

Public API: Resources.calendars

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_id** | **str** | Unique ID for the building a resource is located in. | [optional] 
**capacity** | **int** | Capacity of a resource, number of seats in a room. | [optional] 
**etags** | **str** | ETag of the resource. | [optional] 
**feature_instances** | **object** | Instances of features for the calendar resource. | [optional] 
**floor_name** | **str** | Name of the floor a resource is located on. | [optional] 
**floor_section** | **str** | Name of the section within a floor a resource is located in. | [optional] 
**generated_resource_name** | **str** | The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, \&quot;NYC-2-Training Room 1A (16)\&quot;. | [optional] 
**kind** | **str** | The type of the resource. For calendar resources, the value is &#x60;admin#directory#resources#calendars#CalendarResource&#x60;. | [optional] [default to 'admin#directory#resources#calendars#CalendarResource']
**resource_category** | **str** | The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN. | [optional] 
**resource_description** | **str** | Description of the resource, visible only to admins. | [optional] 
**resource_email** | **str** | The read-only email for the calendar resource. Generated as part of creating a new calendar resource. | [optional] 
**resource_id** | **str** | The unique ID for the calendar resource. | [optional] 
**resource_name** | **str** | The name of the calendar resource. For example, \&quot;Training Room 1A\&quot;. | [optional] 
**resource_type** | **str** | The type of the calendar resource, intended for non-room resources. | [optional] 
**user_visible_description** | **str** | Description of the resource, visible to users and admins. | [optional] 

## Example

```python
from openapi_client.models.calendar_resource import CalendarResource

# TODO update the JSON string below
json = "{}"
# create an instance of CalendarResource from a JSON string
calendar_resource_instance = CalendarResource.from_json(json)
# print the JSON string representation of the object
print(CalendarResource.to_json())

# convert the object into a dict
calendar_resource_dict = calendar_resource_instance.to_dict()
# create an instance of CalendarResource from a dict
calendar_resource_from_dict = CalendarResource.from_dict(calendar_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


