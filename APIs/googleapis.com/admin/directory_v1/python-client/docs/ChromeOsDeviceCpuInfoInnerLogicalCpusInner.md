# ChromeOsDeviceCpuInfoInnerLogicalCpusInner

Status of a single logical CPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**c_states** | [**List[ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner]**](ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner.md) | C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker. | [optional] 
**current_scaling_frequency_khz** | **int** | Current frequency the CPU is running at. | [optional] 
**idle_duration** | **str** | Idle time since last boot. | [optional] 
**max_scaling_frequency_khz** | **int** | Maximum frequency the CPU is allowed to run at, by policy. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_cpu_info_inner_logical_cpus_inner import ChromeOsDeviceCpuInfoInnerLogicalCpusInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceCpuInfoInnerLogicalCpusInner from a JSON string
chrome_os_device_cpu_info_inner_logical_cpus_inner_instance = ChromeOsDeviceCpuInfoInnerLogicalCpusInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceCpuInfoInnerLogicalCpusInner.to_json())

# convert the object into a dict
chrome_os_device_cpu_info_inner_logical_cpus_inner_dict = chrome_os_device_cpu_info_inner_logical_cpus_inner_instance.to_dict()
# create an instance of ChromeOsDeviceCpuInfoInnerLogicalCpusInner from a dict
chrome_os_device_cpu_info_inner_logical_cpus_inner_from_dict = ChromeOsDeviceCpuInfoInnerLogicalCpusInner.from_dict(chrome_os_device_cpu_info_inner_logical_cpus_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


