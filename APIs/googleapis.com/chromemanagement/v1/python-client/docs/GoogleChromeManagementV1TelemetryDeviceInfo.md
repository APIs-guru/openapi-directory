# GoogleChromeManagementV1TelemetryDeviceInfo

Information about a device associated with telemetry data. * Granular Permission needed: TELEMETRY_API_DEVICE

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Output only. The unique Directory API ID of the device. This value is the same as the Admin Console&#39;s Directory API ID in the ChromeOS Devices tab. | [optional] [readonly] 
**org_unit_id** | **str** | Output only. Organization unit ID of the device. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_device_info import GoogleChromeManagementV1TelemetryDeviceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryDeviceInfo from a JSON string
google_chrome_management_v1_telemetry_device_info_instance = GoogleChromeManagementV1TelemetryDeviceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryDeviceInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_device_info_dict = google_chrome_management_v1_telemetry_device_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryDeviceInfo from a dict
google_chrome_management_v1_telemetry_device_info_from_dict = GoogleChromeManagementV1TelemetryDeviceInfo.from_dict(google_chrome_management_v1_telemetry_device_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


