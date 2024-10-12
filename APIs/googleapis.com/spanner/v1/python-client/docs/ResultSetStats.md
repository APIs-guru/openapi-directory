# ResultSetStats

Additional statistics about a ResultSet or PartialResultSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_plan** | [**QueryPlan**](QueryPlan.md) |  | [optional] 
**query_stats** | **Dict[str, object]** | Aggregated statistics from the execution of the query. Only present when the query is profiled. For example, a query could return the statistics as follows: { \&quot;rows_returned\&quot;: \&quot;3\&quot;, \&quot;elapsed_time\&quot;: \&quot;1.22 secs\&quot;, \&quot;cpu_time\&quot;: \&quot;1.19 secs\&quot; } | [optional] 
**row_count_exact** | **str** | Standard DML returns an exact count of rows that were modified. | [optional] 
**row_count_lower_bound** | **str** | Partitioned DML does not offer exactly-once semantics, so it returns a lower bound of the rows modified. | [optional] 

## Example

```python
from openapi_client.models.result_set_stats import ResultSetStats

# TODO update the JSON string below
json = "{}"
# create an instance of ResultSetStats from a JSON string
result_set_stats_instance = ResultSetStats.from_json(json)
# print the JSON string representation of the object
print(ResultSetStats.to_json())

# convert the object into a dict
result_set_stats_dict = result_set_stats_instance.to_dict()
# create an instance of ResultSetStats from a dict
result_set_stats_from_dict = ResultSetStats.from_dict(result_set_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


