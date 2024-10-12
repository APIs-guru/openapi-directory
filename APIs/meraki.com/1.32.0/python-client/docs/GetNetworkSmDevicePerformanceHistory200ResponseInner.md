# GetNetworkSmDevicePerformanceHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_percent_used** | **float** | The percentage of CPU used as a decimal format. | [optional] 
**disk_usage** | [**GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsage**](GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsage.md) |  | [optional] 
**mem_active** | **int** | The active RAM on the device. | [optional] 
**mem_free** | **int** | Memory that is not yet in use by the system. | [optional] 
**mem_inactive** | **int** | The inactive RAM on the device. | [optional] 
**mem_wired** | **int** | Memory used for core OS functions on the device. | [optional] 
**network_received** | **int** | Network bandwith received. | [optional] 
**network_sent** | **int** | Network bandwith transmitted. | [optional] 
**swap_used** | **int** | The amount of space being used on the startup disk to swap unused files to and from RAM. | [optional] 
**ts** | **str** | The time at which the performance was measured. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_performance_history200_response_inner import GetNetworkSmDevicePerformanceHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDevicePerformanceHistory200ResponseInner from a JSON string
get_network_sm_device_performance_history200_response_inner_instance = GetNetworkSmDevicePerformanceHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDevicePerformanceHistory200ResponseInner.to_json())

# convert the object into a dict
get_network_sm_device_performance_history200_response_inner_dict = get_network_sm_device_performance_history200_response_inner_instance.to_dict()
# create an instance of GetNetworkSmDevicePerformanceHistory200ResponseInner from a dict
get_network_sm_device_performance_history200_response_inner_from_dict = GetNetworkSmDevicePerformanceHistory200ResponseInner.from_dict(get_network_sm_device_performance_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


