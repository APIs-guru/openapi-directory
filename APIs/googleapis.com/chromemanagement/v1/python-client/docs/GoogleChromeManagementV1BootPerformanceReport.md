# GoogleChromeManagementV1BootPerformanceReport

Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_OS_REPORT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_up_duration** | **str** | Total time to boot up. | [optional] 
**boot_up_time** | **str** | The timestamp when power came on. | [optional] 
**report_time** | **str** | Timestamp when the report was collected. | [optional] 
**shutdown_duration** | **str** | Total time since shutdown start to power off. | [optional] 
**shutdown_reason** | **str** | The shutdown reason. | [optional] 
**shutdown_time** | **str** | The timestamp when shutdown. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_boot_performance_report import GoogleChromeManagementV1BootPerformanceReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1BootPerformanceReport from a JSON string
google_chrome_management_v1_boot_performance_report_instance = GoogleChromeManagementV1BootPerformanceReport.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1BootPerformanceReport.to_json())

# convert the object into a dict
google_chrome_management_v1_boot_performance_report_dict = google_chrome_management_v1_boot_performance_report_instance.to_dict()
# create an instance of GoogleChromeManagementV1BootPerformanceReport from a dict
google_chrome_management_v1_boot_performance_report_from_dict = GoogleChromeManagementV1BootPerformanceReport.from_dict(google_chrome_management_v1_boot_performance_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


