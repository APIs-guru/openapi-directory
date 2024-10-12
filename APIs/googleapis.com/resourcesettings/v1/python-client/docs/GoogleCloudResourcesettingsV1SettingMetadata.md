# GoogleCloudResourcesettingsV1SettingMetadata

Metadata about a setting which is not editable by the end user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type for this setting. | [optional] 
**default_value** | [**GoogleCloudResourcesettingsV1Value**](GoogleCloudResourcesettingsV1Value.md) |  | [optional] 
**description** | **str** | A detailed description of what this setting does. | [optional] 
**display_name** | **str** | The human readable name for this setting. | [optional] 
**read_only** | **bool** | A flag indicating that values of this setting cannot be modified. See documentation for the specific setting for updates and reasons. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_setting_metadata import GoogleCloudResourcesettingsV1SettingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1SettingMetadata from a JSON string
google_cloud_resourcesettings_v1_setting_metadata_instance = GoogleCloudResourcesettingsV1SettingMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1SettingMetadata.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_setting_metadata_dict = google_cloud_resourcesettings_v1_setting_metadata_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1SettingMetadata from a dict
google_cloud_resourcesettings_v1_setting_metadata_from_dict = GoogleCloudResourcesettingsV1SettingMetadata.from_dict(google_cloud_resourcesettings_v1_setting_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


