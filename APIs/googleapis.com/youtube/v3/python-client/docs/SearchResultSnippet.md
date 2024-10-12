# SearchResultSnippet

Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies. | [optional] 
**channel_title** | **str** | The title of the channel that published the resource that the search result identifies. | [optional] 
**description** | **str** | A description of the search result. | [optional] 
**live_broadcast_content** | **str** | It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it&#39;s \&quot;none\&quot; if there is not any upcoming/active live broadcasts. | [optional] 
**published_at** | **datetime** | The creation date and time of the resource that the search result identifies. | [optional] 
**thumbnails** | [**ThumbnailDetails**](ThumbnailDetails.md) |  | [optional] 
**title** | **str** | The title of the search result. | [optional] 

## Example

```python
from openapi_client.models.search_result_snippet import SearchResultSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResultSnippet from a JSON string
search_result_snippet_instance = SearchResultSnippet.from_json(json)
# print the JSON string representation of the object
print(SearchResultSnippet.to_json())

# convert the object into a dict
search_result_snippet_dict = search_result_snippet_instance.to_dict()
# create an instance of SearchResultSnippet from a dict
search_result_snippet_from_dict = SearchResultSnippet.from_dict(search_result_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


