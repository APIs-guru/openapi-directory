# EventWorkingLocationPropertiesOfficeLocation

If present, specifies that the user is working from an office.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_id** | **str** | An optional building identifier. This should reference a building ID in the organization&#39;s Resources database. | [optional] 
**desk_id** | **str** | An optional desk identifier. | [optional] 
**floor_id** | **str** | An optional floor identifier. | [optional] 
**floor_section_id** | **str** | An optional floor section identifier. | [optional] 
**label** | **str** | The office name that&#39;s displayed in Calendar Web and Mobile clients. We recommend you reference a building name in the organization&#39;s Resources database. | [optional] 

## Example

```python
from openapi_client.models.event_working_location_properties_office_location import EventWorkingLocationPropertiesOfficeLocation

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkingLocationPropertiesOfficeLocation from a JSON string
event_working_location_properties_office_location_instance = EventWorkingLocationPropertiesOfficeLocation.from_json(json)
# print the JSON string representation of the object
print(EventWorkingLocationPropertiesOfficeLocation.to_json())

# convert the object into a dict
event_working_location_properties_office_location_dict = event_working_location_properties_office_location_instance.to_dict()
# create an instance of EventWorkingLocationPropertiesOfficeLocation from a dict
event_working_location_properties_office_location_from_dict = EventWorkingLocationPropertiesOfficeLocation.from_dict(event_working_location_properties_office_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


