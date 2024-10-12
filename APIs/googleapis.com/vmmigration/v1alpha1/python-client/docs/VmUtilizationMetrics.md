# VmUtilizationMetrics

Utilization metrics values for a single VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_average** | **int** | Average CPU usage, percent. | [optional] 
**cpu_average_percent** | **int** | Average CPU usage, percent. | [optional] 
**cpu_max** | **int** | Max CPU usage, percent. | [optional] 
**cpu_max_percent** | **int** | Max CPU usage, percent. | [optional] 
**disk_io_rate_average** | **str** | Average disk IO rate, in kilobytes per second. | [optional] 
**disk_io_rate_average_kbps** | **str** | Average disk IO rate, in kilobytes per second. | [optional] 
**disk_io_rate_max** | **str** | Max disk IO rate, in kilobytes per second. | [optional] 
**disk_io_rate_max_kbps** | **str** | Max disk IO rate, in kilobytes per second. | [optional] 
**memory_average** | **int** | Average memory usage, percent. | [optional] 
**memory_average_percent** | **int** | Average memory usage, percent. | [optional] 
**memory_max** | **int** | Max memory usage, percent. | [optional] 
**memory_max_percent** | **int** | Max memory usage, percent. | [optional] 
**network_throughput_average** | **str** | Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. | [optional] 
**network_throughput_average_kbps** | **str** | Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second. | [optional] 
**network_throughput_max** | **str** | Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. | [optional] 
**network_throughput_max_kbps** | **str** | Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second. | [optional] 

## Example

```python
from openapi_client.models.vm_utilization_metrics import VmUtilizationMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of VmUtilizationMetrics from a JSON string
vm_utilization_metrics_instance = VmUtilizationMetrics.from_json(json)
# print the JSON string representation of the object
print(VmUtilizationMetrics.to_json())

# convert the object into a dict
vm_utilization_metrics_dict = vm_utilization_metrics_instance.to_dict()
# create an instance of VmUtilizationMetrics from a dict
vm_utilization_metrics_from_dict = VmUtilizationMetrics.from_dict(vm_utilization_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


