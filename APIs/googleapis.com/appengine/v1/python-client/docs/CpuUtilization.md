# CpuUtilization

Target scaling by CPU usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_window_length** | **str** | Period of time over which CPU utilization is calculated. | [optional] 
**target_utilization** | **float** | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. | [optional] 

## Example

```python
from openapi_client.models.cpu_utilization import CpuUtilization

# TODO update the JSON string below
json = "{}"
# create an instance of CpuUtilization from a JSON string
cpu_utilization_instance = CpuUtilization.from_json(json)
# print the JSON string representation of the object
print(CpuUtilization.to_json())

# convert the object into a dict
cpu_utilization_dict = cpu_utilization_instance.to_dict()
# create an instance of CpuUtilization from a dict
cpu_utilization_from_dict = CpuUtilization.from_dict(cpu_utilization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


