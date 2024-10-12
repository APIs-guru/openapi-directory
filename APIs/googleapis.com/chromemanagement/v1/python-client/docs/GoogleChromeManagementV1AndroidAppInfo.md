# GoogleChromeManagementV1AndroidAppInfo

Android app information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**List[GoogleChromeManagementV1AndroidAppPermission]**](GoogleChromeManagementV1AndroidAppPermission.md) | Output only. Permissions requested by an Android app. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_android_app_info import GoogleChromeManagementV1AndroidAppInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1AndroidAppInfo from a JSON string
google_chrome_management_v1_android_app_info_instance = GoogleChromeManagementV1AndroidAppInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1AndroidAppInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_android_app_info_dict = google_chrome_management_v1_android_app_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1AndroidAppInfo from a dict
google_chrome_management_v1_android_app_info_from_dict = GoogleChromeManagementV1AndroidAppInfo.from_dict(google_chrome_management_v1_android_app_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


