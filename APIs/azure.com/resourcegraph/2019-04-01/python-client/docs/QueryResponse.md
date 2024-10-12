# QueryResponse

Query result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_token** | **str** | When present, the value can be passed to a subsequent query call (together with the same query and subscriptions used in the current request) to retrieve the next page of data. | [optional] 
**count** | **int** | Number of records returned in the current response. In the case of paging, this is the number of records in the current page. | 
**data** | **object** | Query output in tabular format. | 
**facets** | [**List[Facet]**](Facet.md) | Query facets. | [optional] 
**result_truncated** | **str** | Indicates whether the query results are truncated. | 
**total_records** | **int** | Number of total records matching the query. | 

## Example

```python
from openapi_client.models.query_response import QueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryResponse from a JSON string
query_response_instance = QueryResponse.from_json(json)
# print the JSON string representation of the object
print(QueryResponse.to_json())

# convert the object into a dict
query_response_dict = query_response_instance.to_dict()
# create an instance of QueryResponse from a dict
query_response_from_dict = QueryResponse.from_dict(query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


