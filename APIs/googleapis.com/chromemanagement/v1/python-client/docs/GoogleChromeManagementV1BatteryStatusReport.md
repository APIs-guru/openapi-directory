# GoogleChromeManagementV1BatteryStatusReport

Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**battery_health** | **str** | Output only. Battery health. | [optional] [readonly] 
**cycle_count** | **int** | Output only. Cycle count. | [optional] [readonly] 
**full_charge_capacity** | **str** | Output only. Full charge capacity (mAmpere-hours). | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the sample was collected on device | [optional] [readonly] 
**sample** | [**List[GoogleChromeManagementV1BatterySampleReport]**](GoogleChromeManagementV1BatterySampleReport.md) | Output only. Sampling data for the battery sorted in a decreasing order of report_time. | [optional] [readonly] 
**serial_number** | **str** | Output only. Battery serial number. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_battery_status_report import GoogleChromeManagementV1BatteryStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1BatteryStatusReport from a JSON string
google_chrome_management_v1_battery_status_report_instance = GoogleChromeManagementV1BatteryStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1BatteryStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_battery_status_report_dict = google_chrome_management_v1_battery_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1BatteryStatusReport from a dict
google_chrome_management_v1_battery_status_report_from_dict = GoogleChromeManagementV1BatteryStatusReport.from_dict(google_chrome_management_v1_battery_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


