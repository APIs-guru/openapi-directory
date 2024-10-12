# SearchResult

Results containing indexed information for a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clustered_results** | [**List[SearchResult]**](SearchResult.md) | If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty. | [optional] 
**debug_info** | [**ResultDebugInfo**](ResultDebugInfo.md) |  | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 
**snippet** | [**Snippet**](Snippet.md) |  | [optional] 
**title** | **str** | Title of the search result. | [optional] 
**url** | **str** | The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn&#39;t be changed. | [optional] 

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


