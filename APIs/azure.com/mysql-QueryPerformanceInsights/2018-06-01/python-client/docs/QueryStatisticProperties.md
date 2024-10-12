# QueryStatisticProperties

The properties of a query statistic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | **str** | Aggregation function name. | [optional] 
**database_names** | **List[str]** | The list of database names. | [optional] 
**end_time** | **datetime** | Observation end time. | [optional] 
**metric_display_name** | **str** | Metric display name. | [optional] 
**metric_name** | **str** | Metric name. | [optional] 
**metric_value** | **float** | Metric value. | [optional] 
**metric_value_unit** | **str** | Metric value unit. | [optional] 
**query_execution_count** | **int** | Number of query executions in this time interval. | [optional] 
**query_id** | **str** | Database query identifier. | [optional] 
**start_time** | **datetime** | Observation start time. | [optional] 

## Example

```python
from openapi_client.models.query_statistic_properties import QueryStatisticProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QueryStatisticProperties from a JSON string
query_statistic_properties_instance = QueryStatisticProperties.from_json(json)
# print the JSON string representation of the object
print(QueryStatisticProperties.to_json())

# convert the object into a dict
query_statistic_properties_dict = query_statistic_properties_instance.to_dict()
# create an instance of QueryStatisticProperties from a dict
query_statistic_properties_from_dict = QueryStatisticProperties.from_dict(query_statistic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


