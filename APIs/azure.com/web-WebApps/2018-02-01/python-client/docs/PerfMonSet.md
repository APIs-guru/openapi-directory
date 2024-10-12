# PerfMonSet

Metric information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | End time of the period. | [optional] 
**name** | **str** | Unique key name of the counter. | [optional] 
**start_time** | **datetime** | Start time of the period. | [optional] 
**time_grain** | **str** | Presented time grain. | [optional] 
**values** | [**List[PerfMonSample]**](PerfMonSample.md) | Collection of workers that are active during this time. | [optional] 

## Example

```python
from openapi_client.models.perf_mon_set import PerfMonSet

# TODO update the JSON string below
json = "{}"
# create an instance of PerfMonSet from a JSON string
perf_mon_set_instance = PerfMonSet.from_json(json)
# print the JSON string representation of the object
print(PerfMonSet.to_json())

# convert the object into a dict
perf_mon_set_dict = perf_mon_set_instance.to_dict()
# create an instance of PerfMonSet from a dict
perf_mon_set_from_dict = PerfMonSet.from_dict(perf_mon_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


