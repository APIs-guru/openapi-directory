# GoogleCloudResourcesettingsV1Value

The data in a setting value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_value** | **bool** | Defines this value as being a boolean value. | [optional] 
**duration_value** | **str** | Defines this value as being a Duration. | [optional] 
**enum_value** | [**GoogleCloudResourcesettingsV1ValueEnumValue**](GoogleCloudResourcesettingsV1ValueEnumValue.md) |  | [optional] 
**string_map_value** | [**GoogleCloudResourcesettingsV1ValueStringMap**](GoogleCloudResourcesettingsV1ValueStringMap.md) |  | [optional] 
**string_set_value** | [**GoogleCloudResourcesettingsV1ValueStringSet**](GoogleCloudResourcesettingsV1ValueStringSet.md) |  | [optional] 
**string_value** | **str** | Defines this value as being a string value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_value import GoogleCloudResourcesettingsV1Value

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1Value from a JSON string
google_cloud_resourcesettings_v1_value_instance = GoogleCloudResourcesettingsV1Value.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1Value.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_value_dict = google_cloud_resourcesettings_v1_value_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1Value from a dict
google_cloud_resourcesettings_v1_value_from_dict = GoogleCloudResourcesettingsV1Value.from_dict(google_cloud_resourcesettings_v1_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


