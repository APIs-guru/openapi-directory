# WebAppsUpdateSitePushSettingsRequest

Push settings for the App.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfigPushProperties**](WebAppsList200ResponseValueInnerPropertiesSiteConfigPushProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_update_site_push_settings_request import WebAppsUpdateSitePushSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsUpdateSitePushSettingsRequest from a JSON string
web_apps_update_site_push_settings_request_instance = WebAppsUpdateSitePushSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(WebAppsUpdateSitePushSettingsRequest.to_json())

# convert the object into a dict
web_apps_update_site_push_settings_request_dict = web_apps_update_site_push_settings_request_instance.to_dict()
# create an instance of WebAppsUpdateSitePushSettingsRequest from a dict
web_apps_update_site_push_settings_request_from_dict = WebAppsUpdateSitePushSettingsRequest.from_dict(web_apps_update_site_push_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


