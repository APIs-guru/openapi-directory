# MemoryUsageSample

Memory usage sample.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**utilized_percentage** | **float** | Percentage of system memory utilized. Must be in the interval [0, 100]. | [optional] 

## Example

```python
from openapi_client.models.memory_usage_sample import MemoryUsageSample

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryUsageSample from a JSON string
memory_usage_sample_instance = MemoryUsageSample.from_json(json)
# print the JSON string representation of the object
print(MemoryUsageSample.to_json())

# convert the object into a dict
memory_usage_sample_dict = memory_usage_sample_instance.to_dict()
# create an instance of MemoryUsageSample from a dict
memory_usage_sample_from_dict = MemoryUsageSample.from_dict(memory_usage_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


