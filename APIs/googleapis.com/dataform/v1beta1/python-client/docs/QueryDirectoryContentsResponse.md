# QueryDirectoryContentsResponse

`QueryDirectoryContents` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory_entries** | [**List[DirectoryEntry]**](DirectoryEntry.md) | List of entries in the directory. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.query_directory_contents_response import QueryDirectoryContentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDirectoryContentsResponse from a JSON string
query_directory_contents_response_instance = QueryDirectoryContentsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryDirectoryContentsResponse.to_json())

# convert the object into a dict
query_directory_contents_response_dict = query_directory_contents_response_instance.to_dict()
# create an instance of QueryDirectoryContentsResponse from a dict
query_directory_contents_response_from_dict = QueryDirectoryContentsResponse.from_dict(query_directory_contents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


