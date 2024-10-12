# GoogleChromeManagementV1AndroidAppPermission

Permission requested by an Android app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Output only. The type of the permission. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_android_app_permission import GoogleChromeManagementV1AndroidAppPermission

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1AndroidAppPermission from a JSON string
google_chrome_management_v1_android_app_permission_instance = GoogleChromeManagementV1AndroidAppPermission.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1AndroidAppPermission.to_json())

# convert the object into a dict
google_chrome_management_v1_android_app_permission_dict = google_chrome_management_v1_android_app_permission_instance.to_dict()
# create an instance of GoogleChromeManagementV1AndroidAppPermission from a dict
google_chrome_management_v1_android_app_permission_from_dict = GoogleChromeManagementV1AndroidAppPermission.from_dict(google_chrome_management_v1_android_app_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


