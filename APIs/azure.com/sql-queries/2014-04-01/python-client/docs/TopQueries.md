# TopQueries

A database query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | **str** | The function that is used to aggregate each query&#39;s metrics. | [optional] [readonly] 
**execution_type** | **str** | The execution type that is used to filter the query instances that are returned. | [optional] [readonly] 
**interval_type** | **str** | The duration of the interval (ISO8601 duration format). | [optional] [readonly] 
**number_of_top_queries** | **float** | The number of requested queries. | [optional] [readonly] 
**observation_end_time** | **datetime** | The end time for queries that are returned (ISO8601 format) | [optional] [readonly] 
**observation_start_time** | **datetime** | The start time for queries that are returned (ISO8601 format) | [optional] [readonly] 
**observed_metric** | **str** | The type of metric to use for ordering the top metrics. | [optional] [readonly] 
**queries** | [**List[QueryStatistic]**](QueryStatistic.md) | The list of queries. | [optional] [readonly] 

## Example

```python
from openapi_client.models.top_queries import TopQueries

# TODO update the JSON string below
json = "{}"
# create an instance of TopQueries from a JSON string
top_queries_instance = TopQueries.from_json(json)
# print the JSON string representation of the object
print(TopQueries.to_json())

# convert the object into a dict
top_queries_dict = top_queries_instance.to_dict()
# create an instance of TopQueries from a dict
top_queries_from_dict = TopQueries.from_dict(top_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


