# SearchResponse

The search API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_info** | [**ResponseDebugInfo**](ResponseDebugInfo.md) |  | [optional] 
**error_info** | [**ErrorInfo**](ErrorInfo.md) |  | [optional] 
**facet_results** | [**List[FacetResult]**](FacetResult.md) | Repeated facet results. | [optional] 
**has_more_results** | **bool** | Whether there are more search results matching the query. | [optional] 
**query_interpretation** | [**QueryInterpretation**](QueryInterpretation.md) |  | [optional] 
**result_count_estimate** | **str** | The estimated result count for this query. | [optional] 
**result_count_exact** | **str** | The exact result count for this query. | [optional] 
**result_counts** | [**ResultCounts**](ResultCounts.md) |  | [optional] 
**results** | [**List[SearchResult]**](SearchResult.md) | Results from a search query. | [optional] 
**spell_results** | [**List[SpellResult]**](SpellResult.md) | Suggested spelling for the query. | [optional] 
**structured_results** | [**List[StructuredResult]**](StructuredResult.md) | Structured results for the user query. These results are not counted against the page_size. | [optional] 

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


