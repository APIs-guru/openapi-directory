# QueryRepositoryDirectoryContentsResponse

`QueryRepositoryDirectoryContents` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_entries** | [**List[DirectoryEntry]**](DirectoryEntry.md) | List of entries in the directory. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.query_repository_directory_contents_response import QueryRepositoryDirectoryContentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRepositoryDirectoryContentsResponse from a JSON string
query_repository_directory_contents_response_instance = QueryRepositoryDirectoryContentsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryRepositoryDirectoryContentsResponse.to_json())

# convert the object into a dict
query_repository_directory_contents_response_dict = query_repository_directory_contents_response_instance.to_dict()
# create an instance of QueryRepositoryDirectoryContentsResponse from a dict
query_repository_directory_contents_response_from_dict = QueryRepositoryDirectoryContentsResponse.from_dict(query_repository_directory_contents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


