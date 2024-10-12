# GoogleChromeManagementV1BatterySampleReport

Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_rate** | **int** | Output only. Battery charge percentage. | [optional] [readonly] 
**current** | **str** | Output only. Battery current (mA). | [optional] [readonly] 
**discharge_rate** | **int** | Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it&#39;s being charged. | [optional] [readonly] 
**remaining_capacity** | **str** | Output only. Battery remaining capacity (mAmpere-hours). | [optional] [readonly] 
**report_time** | **str** | Output only. Timestamp of when the sample was collected on device | [optional] [readonly] 
**status** | **str** | Output only. Battery status read from sysfs. Example: Discharging | [optional] [readonly] 
**temperature** | **int** | Output only. Temperature in Celsius degrees. | [optional] [readonly] 
**voltage** | **str** | Output only. Battery voltage (millivolt). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_battery_sample_report import GoogleChromeManagementV1BatterySampleReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1BatterySampleReport from a JSON string
google_chrome_management_v1_battery_sample_report_instance = GoogleChromeManagementV1BatterySampleReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1BatterySampleReport.to_json())

# convert the object into a dict
google_chrome_management_v1_battery_sample_report_dict = google_chrome_management_v1_battery_sample_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1BatterySampleReport from a dict
google_chrome_management_v1_battery_sample_report_from_dict = GoogleChromeManagementV1BatterySampleReport.from_dict(google_chrome_management_v1_battery_sample_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


