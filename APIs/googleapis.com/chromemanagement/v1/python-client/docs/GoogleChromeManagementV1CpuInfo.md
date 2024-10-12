# GoogleChromeManagementV1CpuInfo

CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A * Granular permission needed: TELEMETRY_API_CPU_INFO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A | [optional] [readonly] 
**keylocker_configured** | **bool** | Output only. Whether keylocker is configured.&#x60;TRUE&#x60; &#x3D; Enabled; &#x60;FALSE&#x60; &#x3D; disabled. Only reported if keylockerSupported &#x3D; &#x60;TRUE&#x60;. | [optional] [readonly] 
**keylocker_supported** | **bool** | Output only. Whether keylocker is supported. | [optional] [readonly] 
**max_clock_speed** | **int** | Output only. The max CPU clock speed in kHz. | [optional] [readonly] 
**model** | **str** | Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_cpu_info import GoogleChromeManagementV1CpuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CpuInfo from a JSON string
google_chrome_management_v1_cpu_info_instance = GoogleChromeManagementV1CpuInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CpuInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_cpu_info_dict = google_chrome_management_v1_cpu_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1CpuInfo from a dict
google_chrome_management_v1_cpu_info_from_dict = GoogleChromeManagementV1CpuInfo.from_dict(google_chrome_management_v1_cpu_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


