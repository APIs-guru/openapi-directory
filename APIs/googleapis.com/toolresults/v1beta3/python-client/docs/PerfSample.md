# PerfSample

Resource representing a single performance measure or data point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sample_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**value** | **float** | Value observed | [optional] 

## Example

```python
from openapi_client.models.perf_sample import PerfSample

# TODO update the JSON string below
json = "{}"
# create an instance of PerfSample from a JSON string
perf_sample_instance = PerfSample.from_json(json)
# print the JSON string representation of the object
print(PerfSample.to_json())

# convert the object into a dict
perf_sample_dict = perf_sample_instance.to_dict()
# create an instance of PerfSample from a dict
perf_sample_from_dict = PerfSample.from_dict(perf_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


