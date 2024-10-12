# GoogleChromeManagementV1BatteryInfo

Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_BATTERY_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**design_capacity** | **str** | Output only. Design capacity (mAmpere-hours). | [optional] [readonly] 
**design_min_voltage** | **int** | Output only. Designed minimum output voltage (mV) | [optional] [readonly] 
**manufacture_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**manufacturer** | **str** | Output only. Battery manufacturer. | [optional] [readonly] 
**serial_number** | **str** | Output only. Battery serial number. | [optional] [readonly] 
**technology** | **str** | Output only. Technology of the battery. Example: Li-ion | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_battery_info import GoogleChromeManagementV1BatteryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1BatteryInfo from a JSON string
google_chrome_management_v1_battery_info_instance = GoogleChromeManagementV1BatteryInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1BatteryInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_battery_info_dict = google_chrome_management_v1_battery_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1BatteryInfo from a dict
google_chrome_management_v1_battery_info_from_dict = GoogleChromeManagementV1BatteryInfo.from_dict(google_chrome_management_v1_battery_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


