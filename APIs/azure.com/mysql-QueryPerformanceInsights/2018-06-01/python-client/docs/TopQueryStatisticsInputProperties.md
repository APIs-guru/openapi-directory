# TopQueryStatisticsInputProperties

The properties for input to get top query statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | **str** | Aggregation function name. | 
**aggregation_window** | **str** | Aggregation interval type in ISO 8601 format. | 
**number_of_top_queries** | **int** | Max number of top queries to return. | 
**observation_end_time** | **datetime** | Observation end time. | 
**observation_start_time** | **datetime** | Observation start time. | 
**observed_metric** | **str** | Observed metric name. | 

## Example

```python
from openapi_client.models.top_query_statistics_input_properties import TopQueryStatisticsInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopQueryStatisticsInputProperties from a JSON string
top_query_statistics_input_properties_instance = TopQueryStatisticsInputProperties.from_json(json)
# print the JSON string representation of the object
print(TopQueryStatisticsInputProperties.to_json())

# convert the object into a dict
top_query_statistics_input_properties_dict = top_query_statistics_input_properties_instance.to_dict()
# create an instance of TopQueryStatisticsInputProperties from a dict
top_query_statistics_input_properties_from_dict = TopQueryStatisticsInputProperties.from_dict(top_query_statistics_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


