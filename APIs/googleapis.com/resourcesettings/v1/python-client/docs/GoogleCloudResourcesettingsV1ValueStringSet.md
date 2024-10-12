# GoogleCloudResourcesettingsV1ValueStringSet

A string set value that can hold a set of strings. The maximum length of each string is 200 characters and there can be a maximum of 50 strings in the string set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The strings in the set | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_value_string_set import GoogleCloudResourcesettingsV1ValueStringSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1ValueStringSet from a JSON string
google_cloud_resourcesettings_v1_value_string_set_instance = GoogleCloudResourcesettingsV1ValueStringSet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1ValueStringSet.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_value_string_set_dict = google_cloud_resourcesettings_v1_value_string_set_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1ValueStringSet from a dict
google_cloud_resourcesettings_v1_value_string_set_from_dict = GoogleCloudResourcesettingsV1ValueStringSet.from_dict(google_cloud_resourcesettings_v1_value_string_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


