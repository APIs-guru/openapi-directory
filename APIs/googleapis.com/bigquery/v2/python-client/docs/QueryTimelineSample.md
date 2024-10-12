# QueryTimelineSample

Summary of the state of query execution at a given time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_units** | **str** | Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample. | [optional] 
**completed_units** | **str** | Total parallel units of work completed by this query. | [optional] 
**elapsed_ms** | **str** | Milliseconds elapsed since the start of query execution. | [optional] 
**estimated_runnable_units** | **str** | Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots. | [optional] 
**pending_units** | **str** | Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running. | [optional] 
**total_slot_ms** | **str** | Cumulative slot-ms consumed by the query. | [optional] 

## Example

```python
from openapi_client.models.query_timeline_sample import QueryTimelineSample

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTimelineSample from a JSON string
query_timeline_sample_instance = QueryTimelineSample.from_json(json)
# print the JSON string representation of the object
print(QueryTimelineSample.to_json())

# convert the object into a dict
query_timeline_sample_dict = query_timeline_sample_instance.to_dict()
# create an instance of QueryTimelineSample from a dict
query_timeline_sample_from_dict = QueryTimelineSample.from_dict(query_timeline_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


