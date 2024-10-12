# SearchPosts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last post being returned (an integer between start_index and num_posts). | [optional] 
**group_ids** | **List[str]** | The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren&#39;t present in the group_ids parameter of the request.  | [optional] 
**num_pages** | **int** | The total number of pages available. | [optional] 
**num_posts** | **int** | The total number of posts available. | [optional] 
**page** | **int** | The page number of the posts being returned. | [optional] 
**per_page** | **int** | The number of posts being returned per page. | [optional] 
**posts** | [**List[PostSearchResult]**](PostSearchResult.md) |  | [optional] 
**start_index** | **int** | The index of the first post being returned (an integer between 1 and num_posts). | [optional] 

## Example

```python
from openapi_client.models.search_posts200_response import SearchPosts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchPosts200Response from a JSON string
search_posts200_response_instance = SearchPosts200Response.from_json(json)
# print the JSON string representation of the object
print(SearchPosts200Response.to_json())

# convert the object into a dict
search_posts200_response_dict = search_posts200_response_instance.to_dict()
# create an instance of SearchPosts200Response from a dict
search_posts200_response_from_dict = SearchPosts200Response.from_dict(search_posts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


