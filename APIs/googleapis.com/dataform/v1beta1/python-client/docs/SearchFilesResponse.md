# SearchFilesResponse

Client-facing representation of a file search response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**search_results** | [**List[SearchResult]**](SearchResult.md) | List of matched results. | [optional] 

## Example

```python
from openapi_client.models.search_files_response import SearchFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFilesResponse from a JSON string
search_files_response_instance = SearchFilesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchFilesResponse.to_json())

# convert the object into a dict
search_files_response_dict = search_files_response_instance.to_dict()
# create an instance of SearchFilesResponse from a dict
search_files_response_from_dict = SearchFilesResponse.from_dict(search_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


