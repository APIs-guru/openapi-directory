# SearchResult

A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **str** | The full line containing the search result. | 
**context_after** | **List[str]** | Up to 2 full lines after the search result (see &#x60;context&#x60;). | [optional] 
**context_before** | **List[str]** | Up to 2 full lines before the search result (see &#x60;context&#x60;). | [optional] 
**line** | **int** | Line number containing the search result. | 
**package** | **str** | The Debian source package containing this search result, including the full Debian version number. | 
**path** | **str** | Path to the file containing the this search result, starting with &#x60;package&#x60;. | 

## Example

```python
from openapi_client.models.search_result import SearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResult from a JSON string
search_result_instance = SearchResult.from_json(json)
# print the JSON string representation of the object
print(SearchResult.to_json())

# convert the object into a dict
search_result_dict = search_result_instance.to_dict()
# create an instance of SearchResult from a dict
search_result_from_dict = SearchResult.from_dict(search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


