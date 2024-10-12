# GoogleAppsCloudidentityDevicesV1WipeDeviceResponse

Response message for wiping all data on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**GoogleAppsCloudidentityDevicesV1Device**](GoogleAppsCloudidentityDevicesV1Device.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_wipe_device_response import GoogleAppsCloudidentityDevicesV1WipeDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1WipeDeviceResponse from a JSON string
google_apps_cloudidentity_devices_v1_wipe_device_response_instance = GoogleAppsCloudidentityDevicesV1WipeDeviceResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1WipeDeviceResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_wipe_device_response_dict = google_apps_cloudidentity_devices_v1_wipe_device_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1WipeDeviceResponse from a dict
google_apps_cloudidentity_devices_v1_wipe_device_response_from_dict = GoogleAppsCloudidentityDevicesV1WipeDeviceResponse.from_dict(google_apps_cloudidentity_devices_v1_wipe_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


