# ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner

Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of the state. | [optional] 
**session_duration** | **str** | Time spent in the state since the last reboot. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner import ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner from a JSON string
chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner_instance = ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner.to_json())

# convert the object into a dict
chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner_dict = chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner_instance.to_dict()
# create an instance of ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner from a dict
chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner_from_dict = ChromeOsDeviceCpuInfoInnerLogicalCpusInnerCStatesInner.from_dict(chrome_os_device_cpu_info_inner_logical_cpus_inner_c_states_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


