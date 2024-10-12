# GoogleCloudResourcesettingsV1Setting

The schema for settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_value** | [**GoogleCloudResourcesettingsV1Value**](GoogleCloudResourcesettingsV1Value.md) |  | [optional] 
**etag** | **str** | A fingerprint used for optimistic concurrency. See UpdateSetting for more details. | [optional] 
**local_value** | [**GoogleCloudResourcesettingsV1Value**](GoogleCloudResourcesettingsV1Value.md) |  | [optional] 
**metadata** | [**GoogleCloudResourcesettingsV1SettingMetadata**](GoogleCloudResourcesettingsV1SettingMetadata.md) |  | [optional] 
**name** | **str** | The resource name of the setting. Must be in one of the following forms: * &#x60;projects/{project_number}/settings/{setting_name}&#x60; * &#x60;folders/{folder_id}/settings/{setting_name}&#x60; * &#x60;organizations/{organization_id}/settings/{setting_name}&#x60; For example, \&quot;/projects/123/settings/gcp-enableMyFeature\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_setting import GoogleCloudResourcesettingsV1Setting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1Setting from a JSON string
google_cloud_resourcesettings_v1_setting_instance = GoogleCloudResourcesettingsV1Setting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1Setting.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_setting_dict = google_cloud_resourcesettings_v1_setting_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1Setting from a dict
google_cloud_resourcesettings_v1_setting_from_dict = GoogleCloudResourcesettingsV1Setting.from_dict(google_cloud_resourcesettings_v1_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


