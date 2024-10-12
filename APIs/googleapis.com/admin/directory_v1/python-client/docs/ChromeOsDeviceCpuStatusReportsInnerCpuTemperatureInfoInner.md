# ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | CPU label | [optional] 
**temperature** | **int** | Temperature in Celsius degrees. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner import ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner from a JSON string
chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner_instance = ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner.to_json())

# convert the object into a dict
chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner_dict = chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner_instance.to_dict()
# create an instance of ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner from a dict
chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner_from_dict = ChromeOsDeviceCpuStatusReportsInnerCpuTemperatureInfoInner.from_dict(chrome_os_device_cpu_status_reports_inner_cpu_temperature_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


