# GoogleCloudResourcesettingsV1ListSettingsResponse

The response from ListSettings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Unused. A page token used to retrieve the next page. | [optional] 
**settings** | [**List[GoogleCloudResourcesettingsV1Setting]**](GoogleCloudResourcesettingsV1Setting.md) | A list of settings that are available at the specified Cloud resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_resourcesettings_v1_list_settings_response import GoogleCloudResourcesettingsV1ListSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudResourcesettingsV1ListSettingsResponse from a JSON string
google_cloud_resourcesettings_v1_list_settings_response_instance = GoogleCloudResourcesettingsV1ListSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudResourcesettingsV1ListSettingsResponse.to_json())

# convert the object into a dict
google_cloud_resourcesettings_v1_list_settings_response_dict = google_cloud_resourcesettings_v1_list_settings_response_instance.to_dict()
# create an instance of GoogleCloudResourcesettingsV1ListSettingsResponse from a dict
google_cloud_resourcesettings_v1_list_settings_response_from_dict = GoogleCloudResourcesettingsV1ListSettingsResponse.from_dict(google_cloud_resourcesettings_v1_list_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


