# GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse

Response message for approving the device to access user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_user** | [**GoogleAppsCloudidentityDevicesV1DeviceUser**](GoogleAppsCloudidentityDevicesV1DeviceUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_approve_device_user_response import GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse from a JSON string
google_apps_cloudidentity_devices_v1_approve_device_user_response_instance = GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_approve_device_user_response_dict = google_apps_cloudidentity_devices_v1_approve_device_user_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse from a dict
google_apps_cloudidentity_devices_v1_approve_device_user_response_from_dict = GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse.from_dict(google_apps_cloudidentity_devices_v1_approve_device_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


