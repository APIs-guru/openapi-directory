# ListQueriesResponse

List queries response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;doubleclickbidmanager#listQueriesResponse\&quot;. | [optional] 
**next_page_token** | **str** | Next page&#39;s pagination token if one exists. | [optional] 
**queries** | [**List[Query]**](Query.md) | Retrieved queries. | [optional] 

## Example

```python
from openapi_client.models.list_queries_response import ListQueriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListQueriesResponse from a JSON string
list_queries_response_instance = ListQueriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListQueriesResponse.to_json())

# convert the object into a dict
list_queries_response_dict = list_queries_response_instance.to_dict()
# create an instance of ListQueriesResponse from a dict
list_queries_response_from_dict = ListQueriesResponse.from_dict(list_queries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


