# SearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**next** | **str** | Value to pass to the next search query in order to paginate | [optional] 
**previous** | **str** | Value that points to the previous page. Pass as the next value in a search query to paginate backwards | [optional] 
**results** | [**List[SearchResult]**](SearchResult.md) | Search results | 
**results_warning** | [**SearchWarning**](SearchWarning.md) |  | [optional] 

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


