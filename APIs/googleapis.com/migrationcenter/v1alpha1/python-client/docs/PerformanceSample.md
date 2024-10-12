# PerformanceSample

Performance data sample.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | [**CpuUsageSample**](CpuUsageSample.md) |  | [optional] 
**disk** | [**DiskUsageSample**](DiskUsageSample.md) |  | [optional] 
**memory** | [**MemoryUsageSample**](MemoryUsageSample.md) |  | [optional] 
**network** | [**NetworkUsageSample**](NetworkUsageSample.md) |  | [optional] 
**sample_time** | **str** | Time the sample was collected. If omitted, the frame report time will be used. | [optional] 

## Example

```python
from openapi_client.models.performance_sample import PerformanceSample

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceSample from a JSON string
performance_sample_instance = PerformanceSample.from_json(json)
# print the JSON string representation of the object
print(PerformanceSample.to_json())

# convert the object into a dict
performance_sample_dict = performance_sample_instance.to_dict()
# create an instance of PerformanceSample from a dict
performance_sample_from_dict = PerformanceSample.from_dict(performance_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


