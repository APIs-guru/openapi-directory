# SearchResponse

Search query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**CarSearchFacets**](CarSearchFacets.md) |  | [optional] 
**listings** | [**List[BaseListing]**](BaseListing.md) |  | [optional] 
**num_found** | **int** | The number of listings found | [optional] 
**range_facets** | [**CarSearchRangeFacets**](CarSearchRangeFacets.md) |  | [optional] 
**stats** | [**CarSearchStats**](CarSearchStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_response import SearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponse from a JSON string
search_response_instance = SearchResponse.from_json(json)
# print the JSON string representation of the object
print(SearchResponse.to_json())

# convert the object into a dict
search_response_dict = search_response_instance.to_dict()
# create an instance of SearchResponse from a dict
search_response_from_dict = SearchResponse.from_dict(search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


