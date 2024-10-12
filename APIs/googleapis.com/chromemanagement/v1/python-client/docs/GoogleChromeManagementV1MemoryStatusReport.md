# GoogleChromeManagementV1MemoryStatusReport

Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_MEMORY_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_faults** | **int** | Output only. Number of page faults during this collection | [optional] [readonly] 
**report_time** | **str** | Output only. The timestamp in milliseconds representing time at which this report was sampled. | [optional] [readonly] 
**sample_frequency** | **str** | Output only. Frequency the report is sampled. | [optional] [readonly] 
**system_ram_free_bytes** | **str** | Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_memory_status_report import GoogleChromeManagementV1MemoryStatusReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1MemoryStatusReport from a JSON string
google_chrome_management_v1_memory_status_report_instance = GoogleChromeManagementV1MemoryStatusReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1MemoryStatusReport.to_json())

# convert the object into a dict
google_chrome_management_v1_memory_status_report_dict = google_chrome_management_v1_memory_status_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1MemoryStatusReport from a dict
google_chrome_management_v1_memory_status_report_from_dict = GoogleChromeManagementV1MemoryStatusReport.from_dict(google_chrome_management_v1_memory_status_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


