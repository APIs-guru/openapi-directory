# TopQueriesListResult

Represents the response to a get top queries request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TopQueries]**](TopQueries.md) | The list of top queries. | 

## Example

```python
from openapi_client.models.top_queries_list_result import TopQueriesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TopQueriesListResult from a JSON string
top_queries_list_result_instance = TopQueriesListResult.from_json(json)
# print the JSON string representation of the object
print(TopQueriesListResult.to_json())

# convert the object into a dict
top_queries_list_result_dict = top_queries_list_result_instance.to_dict()
# create an instance of TopQueriesListResult from a dict
top_queries_list_result_from_dict = TopQueriesListResult.from_dict(top_queries_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


