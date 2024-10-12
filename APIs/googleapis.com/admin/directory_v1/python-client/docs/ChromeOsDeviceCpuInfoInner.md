# ChromeOsDeviceCpuInfoInner

CPU specs for a CPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The CPU architecture. | [optional] 
**logical_cpus** | [**List[ChromeOsDeviceCpuInfoInnerLogicalCpusInner]**](ChromeOsDeviceCpuInfoInnerLogicalCpusInner.md) | Information for the Logical CPUs | [optional] 
**max_clock_speed_khz** | **int** | The max CPU clock speed in kHz. | [optional] 
**model** | **str** | The CPU model name. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_cpu_info_inner import ChromeOsDeviceCpuInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceCpuInfoInner from a JSON string
chrome_os_device_cpu_info_inner_instance = ChromeOsDeviceCpuInfoInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceCpuInfoInner.to_json())

# convert the object into a dict
chrome_os_device_cpu_info_inner_dict = chrome_os_device_cpu_info_inner_instance.to_dict()
# create an instance of ChromeOsDeviceCpuInfoInner from a dict
chrome_os_device_cpu_info_inner_from_dict = ChromeOsDeviceCpuInfoInner.from_dict(chrome_os_device_cpu_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


