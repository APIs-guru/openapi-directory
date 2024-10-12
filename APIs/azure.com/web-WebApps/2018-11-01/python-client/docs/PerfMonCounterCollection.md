# PerfMonCounterCollection

Collection of performance monitor counters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[PerfMonResponse]**](PerfMonResponse.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.perf_mon_counter_collection import PerfMonCounterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PerfMonCounterCollection from a JSON string
perf_mon_counter_collection_instance = PerfMonCounterCollection.from_json(json)
# print the JSON string representation of the object
print(PerfMonCounterCollection.to_json())

# convert the object into a dict
perf_mon_counter_collection_dict = perf_mon_counter_collection_instance.to_dict()
# create an instance of PerfMonCounterCollection from a dict
perf_mon_counter_collection_from_dict = PerfMonCounterCollection.from_dict(perf_mon_counter_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


