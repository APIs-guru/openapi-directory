# SearchResults

The result of a JQL search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional search result details in the response. | [optional] [readonly] 
**issues** | [**List[IssueBean]**](IssueBean.md) | The list of issues found by the search. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**names** | **Dict[str, str]** | The ID and name of each field in the search results. | [optional] [readonly] 
**var_schema** | [**Dict[str, JsonTypeBean]**](JsonTypeBean.md) | The schema describing the field types in the search results. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned on the page. | [optional] [readonly] 
**total** | **int** | The number of results on the page. | [optional] [readonly] 
**warning_messages** | **List[str]** | Any warnings related to the JQL query. | [optional] [readonly] 

## Example

```python
from openapi_client.models.search_results import SearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResults from a JSON string
search_results_instance = SearchResults.from_json(json)
# print the JSON string representation of the object
print(SearchResults.to_json())

# convert the object into a dict
search_results_dict = search_results_instance.to_dict()
# create an instance of SearchResults from a dict
search_results_from_dict = SearchResults.from_dict(search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


