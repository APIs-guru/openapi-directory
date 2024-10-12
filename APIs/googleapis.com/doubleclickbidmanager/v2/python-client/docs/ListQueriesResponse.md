# ListQueriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page of queries. If this field is omitted, there are no subsequent pages. | [optional] 
**queries** | [**List[Query]**](Query.md) | The list of queries. | [optional] 

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


