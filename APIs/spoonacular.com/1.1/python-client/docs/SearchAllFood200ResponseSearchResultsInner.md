# SearchAllFood200ResponseSearchResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**results** | [**List[SearchAllFood200ResponseSearchResultsInnerResultsInner]**](SearchAllFood200ResponseSearchResultsInnerResultsInner.md) |  | [optional] 
**total_results** | **int** |  | 

## Example

```python
from openapi_client.models.search_all_food200_response_search_results_inner import SearchAllFood200ResponseSearchResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAllFood200ResponseSearchResultsInner from a JSON string
search_all_food200_response_search_results_inner_instance = SearchAllFood200ResponseSearchResultsInner.from_json(json)
# print the JSON string representation of the object
print(SearchAllFood200ResponseSearchResultsInner.to_json())

# convert the object into a dict
search_all_food200_response_search_results_inner_dict = search_all_food200_response_search_results_inner_instance.to_dict()
# create an instance of SearchAllFood200ResponseSearchResultsInner from a dict
search_all_food200_response_search_results_inner_from_dict = SearchAllFood200ResponseSearchResultsInner.from_dict(search_all_food200_response_search_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


