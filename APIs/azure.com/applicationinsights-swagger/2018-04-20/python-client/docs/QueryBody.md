# QueryBody

The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | **List[str]** | Application IDs to include in cross-application queries. | [optional] 
**query** | **str** | The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/) | 
**timespan** | **str** | Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression. | [optional] 

## Example

```python
from openapi_client.models.query_body import QueryBody

# TODO update the JSON string below
json = "{}"
# create an instance of QueryBody from a JSON string
query_body_instance = QueryBody.from_json(json)
# print the JSON string representation of the object
print(QueryBody.to_json())

# convert the object into a dict
query_body_dict = query_body_instance.to_dict()
# create an instance of QueryBody from a dict
query_body_from_dict = QueryBody.from_dict(query_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


