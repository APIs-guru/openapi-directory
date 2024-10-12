# EventWorkingLocationPropertiesCustomLocation

If present, specifies that the user is working from a custom location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | An optional extra label for additional information. | [optional] 

## Example

```python
from openapi_client.models.event_working_location_properties_custom_location import EventWorkingLocationPropertiesCustomLocation

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkingLocationPropertiesCustomLocation from a JSON string
event_working_location_properties_custom_location_instance = EventWorkingLocationPropertiesCustomLocation.from_json(json)
# print the JSON string representation of the object
print(EventWorkingLocationPropertiesCustomLocation.to_json())

# convert the object into a dict
event_working_location_properties_custom_location_dict = event_working_location_properties_custom_location_instance.to_dict()
# create an instance of EventWorkingLocationPropertiesCustomLocation from a dict
event_working_location_properties_custom_location_from_dict = EventWorkingLocationPropertiesCustomLocation.from_dict(event_working_location_properties_custom_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


