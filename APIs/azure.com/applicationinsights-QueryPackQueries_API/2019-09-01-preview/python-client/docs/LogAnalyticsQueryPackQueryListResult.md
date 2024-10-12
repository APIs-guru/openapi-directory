# LogAnalyticsQueryPackQueryListResult

Describes the list of Log Analytics QueryPack-Query resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to get the next set of Log Analytics QueryPack definitions if too many QueryPack-Queries where returned in the result set. | [optional] 
**value** | [**List[LogAnalyticsQueryPackQuery]**](LogAnalyticsQueryPackQuery.md) | List of Log Analytics QueryPack Query definitions. | 

## Example

```python
from openapi_client.models.log_analytics_query_pack_query_list_result import LogAnalyticsQueryPackQueryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPackQueryListResult from a JSON string
log_analytics_query_pack_query_list_result_instance = LogAnalyticsQueryPackQueryListResult.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPackQueryListResult.to_json())

# convert the object into a dict
log_analytics_query_pack_query_list_result_dict = log_analytics_query_pack_query_list_result_instance.to_dict()
# create an instance of LogAnalyticsQueryPackQueryListResult from a dict
log_analytics_query_pack_query_list_result_from_dict = LogAnalyticsQueryPackQueryListResult.from_dict(log_analytics_query_pack_query_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


