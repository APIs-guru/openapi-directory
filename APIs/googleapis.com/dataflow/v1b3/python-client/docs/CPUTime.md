# CPUTime

Modeled after information exposed by /proc/stat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **float** | Average CPU utilization rate (% non-idle cpu / second) since previous sample. | [optional] 
**timestamp** | **str** | Timestamp of the measurement. | [optional] 
**total_ms** | **str** | Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up. | [optional] 

## Example

```python
from openapi_client.models.cpu_time import CPUTime

# TODO update the JSON string below
json = "{}"
# create an instance of CPUTime from a JSON string
cpu_time_instance = CPUTime.from_json(json)
# print the JSON string representation of the object
print(CPUTime.to_json())

# convert the object into a dict
cpu_time_dict = cpu_time_instance.to_dict()
# create an instance of CPUTime from a dict
cpu_time_from_dict = CPUTime.from_dict(cpu_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


