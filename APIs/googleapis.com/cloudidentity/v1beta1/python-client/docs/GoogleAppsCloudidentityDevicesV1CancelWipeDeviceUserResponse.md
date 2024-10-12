# GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse

Response message for cancelling an unfinished user account wipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_user** | [**GoogleAppsCloudidentityDevicesV1DeviceUser**](GoogleAppsCloudidentityDevicesV1DeviceUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response import GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse from a JSON string
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response_instance = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response_dict = google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse from a dict
google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response_from_dict = GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse.from_dict(google_apps_cloudidentity_devices_v1_cancel_wipe_device_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


