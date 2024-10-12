# LogAnalyticsQueryPackQuery

A Log Analytics QueryPack-Query definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogAnalyticsQueryPackQueryProperties**](LogAnalyticsQueryPackQueryProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_query_pack_query import LogAnalyticsQueryPackQuery

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsQueryPackQuery from a JSON string
log_analytics_query_pack_query_instance = LogAnalyticsQueryPackQuery.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsQueryPackQuery.to_json())

# convert the object into a dict
log_analytics_query_pack_query_dict = log_analytics_query_pack_query_instance.to_dict()
# create an instance of LogAnalyticsQueryPackQuery from a dict
log_analytics_query_pack_query_from_dict = LogAnalyticsQueryPackQuery.from_dict(log_analytics_query_pack_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


