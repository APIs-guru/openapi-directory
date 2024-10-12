# GoogleChromeManagementV1CpuStatusReport

Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_temperature_info** | [**List[GoogleChromeManagementV1CpuTemperatureInfo]**](GoogleChromeManagementV1CpuTemperatureInfo.md) | Output only. CPU temperature sample info per CPU core in Celsius | [optional] [readonly] 
**cpu_utilization_pct** | **int** | Output only. Sample of CPU utilization (0-100 percent). | [optional] [readonly] 
**report_time** | **str** | Output only. The timestamp in milliseconds representing time at which this report was sampled. | [optional] [readonly] 
**sample_frequency** | **str** | Output only. Frequency the report is sampled. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_cpu_status_report import GoogleChromeManagementV1CpuStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CpuStatusReport from a JSON string
google_chrome_management_v1_cpu_status_report_instance = GoogleChromeManagementV1CpuStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CpuStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_cpu_status_report_dict = google_chrome_management_v1_cpu_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1CpuStatusReport from a dict
google_chrome_management_v1_cpu_status_report_from_dict = GoogleChromeManagementV1CpuStatusReport.from_dict(google_chrome_management_v1_cpu_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


