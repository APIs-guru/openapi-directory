# OpsAnalyticsQuery

Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_query_text** | **str** | Required. A logs analytics SQL query, which generally follows BigQuery format.This is the SQL query that appears in the Log Analytics UI&#39;s query editor. | [optional] 

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


