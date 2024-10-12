# GoogleChromeManagementV1InstalledApp

Describes an installed app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote). | [optional] [readonly] 
**app_install_type** | **str** | Output only. How the app was installed. | [optional] [readonly] 
**app_source** | **str** | Output only. Source of the installed app. | [optional] [readonly] 
**app_type** | **str** | Output only. Type of the app. | [optional] [readonly] 
**browser_device_count** | **str** | Output only. Count of browser devices with this app installed. | [optional] [readonly] 
**description** | **str** | Output only. Description of the installed app. | [optional] [readonly] 
**disabled** | **bool** | Output only. Whether the app is disabled. | [optional] [readonly] 
**display_name** | **str** | Output only. Name of the installed app. | [optional] [readonly] 
**homepage_uri** | **str** | Output only. Homepage uri of the installed app. | [optional] [readonly] 
**os_user_count** | **str** | Output only. Count of ChromeOS users with this app installed. | [optional] [readonly] 
**permissions** | **List[str]** | Output only. Permissions of the installed app. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_installed_app import GoogleChromeManagementV1InstalledApp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1InstalledApp from a JSON string
google_chrome_management_v1_installed_app_instance = GoogleChromeManagementV1InstalledApp.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1InstalledApp.to_json())

# convert the object into a dict
google_chrome_management_v1_installed_app_dict = google_chrome_management_v1_installed_app_instance.to_dict()
# create an instance of GoogleChromeManagementV1InstalledApp from a dict
google_chrome_management_v1_installed_app_from_dict = GoogleChromeManagementV1InstalledApp.from_dict(google_chrome_management_v1_installed_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


