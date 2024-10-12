# RecentQuery

Describes a recent query executed on the Logs Explorer or Log Analytics page within the last ~ 30 days.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_run_time** | **str** | Output only. The timestamp when this query was last run. | [optional] [readonly] 
**logging_query** | [**LoggingQuery**](LoggingQuery.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the recent query.In the format: \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]\&quot; For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID. | [optional] [readonly] 
**ops_analytics_query** | [**OpsAnalyticsQuery**](OpsAnalyticsQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.recent_query import RecentQuery

# TODO update the JSON string below
json = "{}"
# create an instance of RecentQuery from a JSON string
recent_query_instance = RecentQuery.from_json(json)
# print the JSON string representation of the object
print(RecentQuery.to_json())

# convert the object into a dict
recent_query_dict = recent_query_instance.to_dict()
# create an instance of RecentQuery from a dict
recent_query_from_dict = RecentQuery.from_dict(recent_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


