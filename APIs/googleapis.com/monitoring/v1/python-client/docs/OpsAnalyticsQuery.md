# OpsAnalyticsQuery

Preview: A query that produces an aggregated response and supporting data. This is a preview feature and may be subject to change before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql** | **str** | A SQL query to fetch time series, category series, or numeric series data. | [optional] 

## Example

```python
from openapi_client.models.ops_analytics_query import OpsAnalyticsQuery

# TODO update the JSON string below
json = "{}"
# create an instance of OpsAnalyticsQuery from a JSON string
ops_analytics_query_instance = OpsAnalyticsQuery.from_json(json)
# print the JSON string representation of the object
print(OpsAnalyticsQuery.to_json())

# convert the object into a dict
ops_analytics_query_dict = ops_analytics_query_instance.to_dict()
# create an instance of OpsAnalyticsQuery from a dict
ops_analytics_query_from_dict = OpsAnalyticsQuery.from_dict(ops_analytics_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


