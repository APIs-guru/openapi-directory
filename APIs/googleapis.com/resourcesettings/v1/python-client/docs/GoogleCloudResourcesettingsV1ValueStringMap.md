# GoogleCloudResourcesettingsV1ValueStringMap

A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | **Dict[str, str]** | The key-value pairs in the map | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_value_string_map import GoogleCloudResourcesettingsV1ValueStringMap

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1ValueStringMap from a JSON string
google_cloud_resourcesettings_v1_value_string_map_instance = GoogleCloudResourcesettingsV1ValueStringMap.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1ValueStringMap.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_value_string_map_dict = google_cloud_resourcesettings_v1_value_string_map_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1ValueStringMap from a dict
google_cloud_resourcesettings_v1_value_string_map_from_dict = GoogleCloudResourcesettingsV1ValueStringMap.from_dict(google_cloud_resourcesettings_v1_value_string_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


