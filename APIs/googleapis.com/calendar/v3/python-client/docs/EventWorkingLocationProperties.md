# EventWorkingLocationProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_location** | [**EventWorkingLocationPropertiesCustomLocation**](EventWorkingLocationPropertiesCustomLocation.md) |  | [optional] 
**home_office** | **object** | If present, specifies that the user is working at home. | [optional] 
**office_location** | [**EventWorkingLocationPropertiesOfficeLocation**](EventWorkingLocationPropertiesOfficeLocation.md) |  | [optional] 
**type** | **str** | Type of the working location. Possible values are:   - \&quot;homeOffice\&quot; - The user is working at home.  - \&quot;officeLocation\&quot; - The user is working from an office.  - \&quot;customLocation\&quot; - The user is working from a custom location.  Any details are specified in a sub-field of the specified name, but this field may be missing if empty. Any other fields are ignored. Required when adding working location properties. | [optional] 

## Example

```python
from openapi_client.models.event_working_location_properties import EventWorkingLocationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventWorkingLocationProperties from a JSON string
event_working_location_properties_instance = EventWorkingLocationProperties.from_json(json)
# print the JSON string representation of the object
print(EventWorkingLocationProperties.to_json())

# convert the object into a dict
event_working_location_properties_dict = event_working_location_properties_instance.to_dict()
# create an instance of EventWorkingLocationProperties from a dict
event_working_location_properties_from_dict = EventWorkingLocationProperties.from_dict(event_working_location_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


