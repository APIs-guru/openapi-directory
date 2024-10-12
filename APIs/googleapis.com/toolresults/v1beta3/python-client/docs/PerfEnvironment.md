# PerfEnvironment

Encapsulates performance environment info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_info** | [**CPUInfo**](CPUInfo.md) |  | [optional] 
**memory_info** | [**MemoryInfo**](MemoryInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.perf_environment import PerfEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of PerfEnvironment from a JSON string
perf_environment_instance = PerfEnvironment.from_json(json)
# print the JSON string representation of the object
print(PerfEnvironment.to_json())

# convert the object into a dict
perf_environment_dict = perf_environment_instance.to_dict()
# create an instance of PerfEnvironment from a dict
perf_environment_from_dict = PerfEnvironment.from_dict(perf_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


