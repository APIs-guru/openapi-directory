# GoogleChromeManagementV1ChromeAppPermission

Permission requested by a Chrome app or extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_user_data** | **bool** | Output only. If available, whether this permissions grants the app/extension access to user data. | [optional] [readonly] 
**documentation_uri** | **str** | Output only. If available, a URI to a page that has documentation for the current permission. | [optional] [readonly] 
**type** | **str** | Output only. The type of the permission. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_chrome_app_permission import GoogleChromeManagementV1ChromeAppPermission

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1ChromeAppPermission from a JSON string
google_chrome_management_v1_chrome_app_permission_instance = GoogleChromeManagementV1ChromeAppPermission.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1ChromeAppPermission.to_json())

# convert the object into a dict
google_chrome_management_v1_chrome_app_permission_dict = google_chrome_management_v1_chrome_app_permission_instance.to_dict()
# create an instance of GoogleChromeManagementV1ChromeAppPermission from a dict
google_chrome_management_v1_chrome_app_permission_from_dict = GoogleChromeManagementV1ChromeAppPermission.from_dict(google_chrome_management_v1_chrome_app_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


