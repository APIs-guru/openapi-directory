# GoogleChromeManagementV1CpuTemperatureInfo

CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Output only. CPU label. Example: Core 0 | [optional] [readonly] 
**temperature_celsius** | **int** | Output only. CPU temperature in Celsius. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_cpu_temperature_info import GoogleChromeManagementV1CpuTemperatureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CpuTemperatureInfo from a JSON string
google_chrome_management_v1_cpu_temperature_info_instance = GoogleChromeManagementV1CpuTemperatureInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CpuTemperatureInfo.to_json())

# convert the object into a dict
google_chrome_management_v1_cpu_temperature_info_dict = google_chrome_management_v1_cpu_temperature_info_instance.to_dict()
# create an instance of GoogleChromeManagementV1CpuTemperatureInfo from a dict
google_chrome_management_v1_cpu_temperature_info_from_dict = GoogleChromeManagementV1CpuTemperatureInfo.from_dict(google_chrome_management_v1_cpu_temperature_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


