# QueryRequest

Describes a query to be executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**List[FacetRequest]**](FacetRequest.md) | An array of facet requests to be computed against the query result. | [optional] 
**options** | [**QueryRequestOptions**](QueryRequestOptions.md) |  | [optional] 
**query** | **str** | The resources query. | 
**subscriptions** | **List[str]** | Azure subscriptions against which to execute the query. | 

## Example

```python
from openapi_client.models.query_request import QueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequest from a JSON string
query_request_instance = QueryRequest.from_json(json)
# print the JSON string representation of the object
print(QueryRequest.to_json())

# convert the object into a dict
query_request_dict = query_request_instance.to_dict()
# create an instance of QueryRequest from a dict
query_request_from_dict = QueryRequest.from_dict(query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


