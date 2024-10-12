# GoogleChromeManagementV1TelemetryUserDevice

Telemetry data collected for a managed user and device. * Granular permission needed: TELEMETRY_API_DEVICE

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_status_report** | [**List[GoogleChromeManagementV1AudioStatusReport]**](GoogleChromeManagementV1AudioStatusReport.md) | Output only. Audio reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**device_activity_report** | [**List[GoogleChromeManagementV1DeviceActivityReport]**](GoogleChromeManagementV1DeviceActivityReport.md) | Output only. Device activity reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**device_id** | **str** | The unique Directory API ID of the device. This value is the same as the Admin Console&#39;s Directory API ID in the ChromeOS Devices tab. | [optional] 
**network_bandwidth_report** | [**List[GoogleChromeManagementV1NetworkBandwidthReport]**](GoogleChromeManagementV1NetworkBandwidthReport.md) | Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**peripherals_report** | [**List[GoogleChromeManagementV1PeripheralsReport]**](GoogleChromeManagementV1PeripheralsReport.md) | Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_user_device import GoogleChromeManagementV1TelemetryUserDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryUserDevice from a JSON string
google_chrome_management_v1_telemetry_user_device_instance = GoogleChromeManagementV1TelemetryUserDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryUserDevice.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_user_device_dict = google_chrome_management_v1_telemetry_user_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryUserDevice from a dict
google_chrome_management_v1_telemetry_user_device_from_dict = GoogleChromeManagementV1TelemetryUserDevice.from_dict(google_chrome_management_v1_telemetry_user_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


