# CpuUsageSample

CPU usage sample.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utilized_percentage** | **float** | Percentage of total CPU capacity utilized. Must be in the interval [0, 100]. On most systems can be calculated using 100 - idle percentage. | [optional] 

## Example

```python
from openapi_client.models.cpu_usage_sample import CpuUsageSample

# TODO update the JSON string below
json = "{}"
# create an instance of CpuUsageSample from a JSON string
cpu_usage_sample_instance = CpuUsageSample.from_json(json)
# print the JSON string representation of the object
print(CpuUsageSample.to_json())

# convert the object into a dict
cpu_usage_sample_dict = cpu_usage_sample_instance.to_dict()
# create an instance of CpuUsageSample from a dict
cpu_usage_sample_from_dict = CpuUsageSample.from_dict(cpu_usage_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


