# QueryInterval

A database query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_count** | **float** | The number of times the query was executed during this interval. | [optional] [readonly] 
**interval_start_time** | **datetime** | The start time of the measurement interval (ISO8601 format). | [optional] [readonly] 
**metrics** | [**List[QueryMetric]**](QueryMetric.md) | The list of query metrics during this interval. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_interval import QueryInterval

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInterval from a JSON string
query_interval_instance = QueryInterval.from_json(json)
# print the JSON string representation of the object
print(QueryInterval.to_json())

# convert the object into a dict
query_interval_dict = query_interval_instance.to_dict()
# create an instance of QueryInterval from a dict
query_interval_from_dict = QueryInterval.from_dict(query_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


