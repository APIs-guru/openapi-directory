# SearchAnalyticsQueryResponse

A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_aggregation_type** | **str** | How the results were aggregated. | [optional] 
**rows** | [**List[ApiDataRow]**](ApiDataRow.md) | A list of rows grouped by the key values in the order given in the query. | [optional] 

## Example

```python
from openapi_client.models.search_analytics_query_response import SearchAnalyticsQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAnalyticsQueryResponse from a JSON string
search_analytics_query_response_instance = SearchAnalyticsQueryResponse.from_json(json)
# print the JSON string representation of the object
print(SearchAnalyticsQueryResponse.to_json())

# convert the object into a dict
search_analytics_query_response_dict = search_analytics_query_response_instance.to_dict()
# create an instance of SearchAnalyticsQueryResponse from a dict
search_analytics_query_response_from_dict = SearchAnalyticsQueryResponse.from_dict(search_analytics_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


