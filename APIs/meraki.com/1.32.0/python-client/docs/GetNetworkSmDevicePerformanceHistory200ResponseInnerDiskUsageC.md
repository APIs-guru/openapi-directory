# GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC

An object containing current disk usage details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**space** | **int** | The available disk space. | [optional] 
**used** | **int** | The used disk space. | [optional] 

## Example

```python
from openapi_client.models.get_network_sm_device_performance_history200_response_inner_disk_usage_c import GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC from a JSON string
get_network_sm_device_performance_history200_response_inner_disk_usage_c_instance = GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC.to_json())

# convert the object into a dict
get_network_sm_device_performance_history200_response_inner_disk_usage_c_dict = get_network_sm_device_performance_history200_response_inner_disk_usage_c_instance.to_dict()
# create an instance of GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC from a dict
get_network_sm_device_performance_history200_response_inner_disk_usage_c_from_dict = GetNetworkSmDevicePerformanceHistory200ResponseInnerDiskUsageC.from_dict(get_network_sm_device_performance_history200_response_inner_disk_usage_c_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


