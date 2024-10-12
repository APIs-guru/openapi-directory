# SearchFoldersResponse

The response message for searching folders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folders** | [**List[Folder]**](Folder.md) | A possibly paginated folder search results. the specified parent resource. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to &#x60;SearchFolders&#x60; that indicates from where searching should continue. | [optional] 

## Example

```python
from openapi_client.models.search_folders_response import SearchFoldersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFoldersResponse from a JSON string
search_folders_response_instance = SearchFoldersResponse.from_json(json)
# print the JSON string representation of the object
print(SearchFoldersResponse.to_json())

# convert the object into a dict
search_folders_response_dict = search_folders_response_instance.to_dict()
# create an instance of SearchFoldersResponse from a dict
search_folders_response_from_dict = SearchFoldersResponse.from_dict(search_folders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


