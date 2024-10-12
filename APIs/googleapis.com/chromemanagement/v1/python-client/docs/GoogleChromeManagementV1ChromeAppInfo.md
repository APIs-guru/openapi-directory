# GoogleChromeManagementV1ChromeAppInfo

Chrome Web Store app information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_owned** | **bool** | Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found. | [optional] [readonly] 
**is_cws_hosted** | **bool** | Output only. Whether the app or extension is in a published state in the Chrome Web Store. | [optional] [readonly] 
**is_extension_policy_supported** | **bool** | Output only. Whether an app supports policy for extensions. | [optional] [readonly] 
**is_kiosk_only** | **bool** | Output only. Whether the app is only for Kiosk mode on ChromeOS devices | [optional] [readonly] 
**is_theme** | **bool** | Output only. Whether the app or extension is a theme. | [optional] [readonly] 
**kiosk_enabled** | **bool** | Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices | [optional] [readonly] 
**min_user_count** | **int** | Output only. The minimum number of users using this app. | [optional] [readonly] 
**permissions** | [**List[GoogleChromeManagementV1ChromeAppPermission]**](GoogleChromeManagementV1ChromeAppPermission.md) | Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found. | [optional] [readonly] 
**site_access** | [**List[GoogleChromeManagementV1ChromeAppSiteAccess]**](GoogleChromeManagementV1ChromeAppSiteAccess.md) | Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found. | [optional] [readonly] 
**support_enabled** | **bool** | Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found. | [optional] [readonly] 
**type** | **str** | Output only. Types of an item in the Chrome Web Store | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_chrome_app_info import GoogleChromeManagementV1ChromeAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ChromeAppInfo from a JSON string
google_chrome_management_v1_chrome_app_info_instance = GoogleChromeManagementV1ChromeAppInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ChromeAppInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_chrome_app_info_dict = google_chrome_management_v1_chrome_app_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1ChromeAppInfo from a dict
google_chrome_management_v1_chrome_app_info_from_dict = GoogleChromeManagementV1ChromeAppInfo.from_dict(google_chrome_management_v1_chrome_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


