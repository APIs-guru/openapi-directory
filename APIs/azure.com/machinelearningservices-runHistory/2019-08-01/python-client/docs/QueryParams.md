# QueryParams

The set of supported filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token to use for getting the next set of resources. | [optional] 
**filter** | **str** | Allows for filtering the collection of resources.  The expression specified is evaluated for each resource in the collection, and only items where the expression evaluates to true are included in the response.  See https://docs.microsoft.com/en-us/azure/search/query-odata-filter-orderby-syntax for details on the expression syntax. | [optional] 
**order_by** | **str** | The comma separated list of resource properties to use for sorting the requested resources.  Optionally, can be followed by either &#39;asc&#39; or &#39;desc&#39; | [optional] 
**top** | **int** | The maximum number of items in the resource collection to be included in the result.  If not specified, all items are returned. | [optional] 

## Example

```python
from openapi_client.models.query_params import QueryParams

# TODO update the JSON string below
json = "{}"
# create an instance of QueryParams from a JSON string
query_params_instance = QueryParams.from_json(json)
# print the JSON string representation of the object
print(QueryParams.to_json())

# convert the object into a dict
query_params_dict = query_params_instance.to_dict()
# create an instance of QueryParams from a dict
query_params_from_dict = QueryParams.from_dict(query_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


