# SearchQueries

Query metadata for the previous, current, and next pages of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page** | [**List[SearchQueriesNextPageInner]**](SearchQueriesNextPageInner.md) | Metadata representing the next page of results, if applicable. | [optional] 
**previous_page** | [**List[SearchQueriesNextPageInner]**](SearchQueriesNextPageInner.md) | Metadata representing the previous page of results, if applicable. | [optional] 
**request** | [**List[SearchQueriesNextPageInner]**](SearchQueriesNextPageInner.md) | Metadata representing the current request. | [optional] 

## Example

```python
from openapi_client.models.search_queries import SearchQueries

# TODO update the JSON string below
json = "{}"
# create an instance of SearchQueries from a JSON string
search_queries_instance = SearchQueries.from_json(json)
# print the JSON string representation of the object
print(SearchQueries.to_json())

# convert the object into a dict
search_queries_dict = search_queries_instance.to_dict()
# create an instance of SearchQueries from a dict
search_queries_from_dict = SearchQueries.from_dict(search_queries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


