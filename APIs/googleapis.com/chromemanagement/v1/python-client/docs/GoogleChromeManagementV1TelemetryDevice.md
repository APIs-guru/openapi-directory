# GoogleChromeManagementV1TelemetryDevice

Telemetry data collected from a managed device. * Granular permission needed: TELEMETRY_API_DEVICE

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_status_report** | [**List[GoogleChromeManagementV1AudioStatusReport]**](GoogleChromeManagementV1AudioStatusReport.md) | Output only. Audio reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**battery_info** | [**List[GoogleChromeManagementV1BatteryInfo]**](GoogleChromeManagementV1BatteryInfo.md) | Output only. Information on battery specs for the device. | [optional] [readonly] 
**battery_status_report** | [**List[GoogleChromeManagementV1BatteryStatusReport]**](GoogleChromeManagementV1BatteryStatusReport.md) | Output only. Battery reports collected periodically. | [optional] [readonly] 
**boot_performance_report** | [**List[GoogleChromeManagementV1BootPerformanceReport]**](GoogleChromeManagementV1BootPerformanceReport.md) | Output only. Boot performance reports of the device. | [optional] [readonly] 
**cpu_info** | [**List[GoogleChromeManagementV1CpuInfo]**](GoogleChromeManagementV1CpuInfo.md) | Output only. Information regarding CPU specs for the device. | [optional] [readonly] 
**cpu_status_report** | [**List[GoogleChromeManagementV1CpuStatusReport]**](GoogleChromeManagementV1CpuStatusReport.md) | Output only. CPU status reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**customer** | **str** | Output only. Google Workspace Customer whose enterprise enrolled the device. | [optional] [readonly] 
**device_id** | **str** | Output only. The unique Directory API ID of the device. This value is the same as the Admin Console&#39;s Directory API ID in the ChromeOS Devices tab | [optional] [readonly] 
**graphics_info** | [**GoogleChromeManagementV1GraphicsInfo**](GoogleChromeManagementV1GraphicsInfo.md) |  | [optional] 
**graphics_status_report** | [**List[GoogleChromeManagementV1GraphicsStatusReport]**](GoogleChromeManagementV1GraphicsStatusReport.md) | Output only. Graphics reports collected periodically. | [optional] [readonly] 
**heartbeat_status_report** | [**List[GoogleChromeManagementV1HeartbeatStatusReport]**](GoogleChromeManagementV1HeartbeatStatusReport.md) | Output only. Heartbeat status report containing timestamps periodically sorted in decreasing order of report_time | [optional] [readonly] 
**kiosk_app_status_report** | [**List[GoogleChromeManagementV1KioskAppStatusReport]**](GoogleChromeManagementV1KioskAppStatusReport.md) | Output only. Kiosk app status report for the kiosk device | [optional] [readonly] 
**memory_info** | [**GoogleChromeManagementV1MemoryInfo**](GoogleChromeManagementV1MemoryInfo.md) |  | [optional] 
**memory_status_report** | [**List[GoogleChromeManagementV1MemoryStatusReport]**](GoogleChromeManagementV1MemoryStatusReport.md) | Output only. Memory status reports collected periodically sorted decreasing by report_time. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the device. | [optional] [readonly] 
**network_bandwidth_report** | [**List[GoogleChromeManagementV1NetworkBandwidthReport]**](GoogleChromeManagementV1NetworkBandwidthReport.md) | Output only. Network bandwidth reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**network_diagnostics_report** | [**List[GoogleChromeManagementV1NetworkDiagnosticsReport]**](GoogleChromeManagementV1NetworkDiagnosticsReport.md) | Output only. Network diagnostics collected periodically. | [optional] [readonly] 
**network_info** | [**GoogleChromeManagementV1NetworkInfo**](GoogleChromeManagementV1NetworkInfo.md) |  | [optional] 
**network_status_report** | [**List[GoogleChromeManagementV1NetworkStatusReport]**](GoogleChromeManagementV1NetworkStatusReport.md) | Output only. Network specs collected periodically. | [optional] [readonly] 
**org_unit_id** | **str** | Output only. Organization unit ID of the device. | [optional] [readonly] 
**os_update_status** | [**List[GoogleChromeManagementV1OsUpdateStatus]**](GoogleChromeManagementV1OsUpdateStatus.md) | Output only. Contains relevant information regarding ChromeOS update status. | [optional] [readonly] 
**peripherals_report** | [**List[GoogleChromeManagementV1PeripheralsReport]**](GoogleChromeManagementV1PeripheralsReport.md) | Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time. | [optional] [readonly] 
**runtime_counters_report** | [**List[GoogleChromeManagementV1RuntimeCountersReport]**](GoogleChromeManagementV1RuntimeCountersReport.md) | Output only. Runtime counters reports collected device lifetime runtime, as well as the counts of S0-&gt;S3, S0-&gt;S4, and S0-&gt;S5 transitions, meaning entering into sleep, hibernation, and power-off states | [optional] [readonly] 
**serial_number** | **str** | Output only. Device serial number. This value is the same as the Admin Console&#39;s Serial Number in the ChromeOS Devices tab. | [optional] [readonly] 
**storage_info** | [**GoogleChromeManagementV1StorageInfo**](GoogleChromeManagementV1StorageInfo.md) |  | [optional] 
**storage_status_report** | [**List[GoogleChromeManagementV1StorageStatusReport]**](GoogleChromeManagementV1StorageStatusReport.md) | Output only. Storage reports collected periodically. | [optional] [readonly] 
**thunderbolt_info** | [**List[GoogleChromeManagementV1ThunderboltInfo]**](GoogleChromeManagementV1ThunderboltInfo.md) | Output only. Information on Thunderbolt bus. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_telemetry_device import GoogleChromeManagementV1TelemetryDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1TelemetryDevice from a JSON string
google_chrome_management_v1_telemetry_device_instance = GoogleChromeManagementV1TelemetryDevice.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1TelemetryDevice.to_json())

# convert the object into a dict
google_chrome_management_v1_telemetry_device_dict = google_chrome_management_v1_telemetry_device_instance.to_dict()
# create an instance of GoogleChromeManagementV1TelemetryDevice from a dict
google_chrome_management_v1_telemetry_device_from_dict = GoogleChromeManagementV1TelemetryDevice.from_dict(google_chrome_management_v1_telemetry_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


