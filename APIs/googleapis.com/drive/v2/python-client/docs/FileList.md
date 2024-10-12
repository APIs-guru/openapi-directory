# FileList

A list of files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the list. | [optional] 
**incomplete_search** | **bool** | Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the \&quot;allDrives\&quot; corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as \&quot;default\&quot; or \&quot;drive\&quot;. | [optional] 
**items** | [**List[File]**](File.md) | The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | This is always &#x60;drive#fileList&#x60;. | [optional] [default to 'drive#fileList']
**next_link** | **str** | A link to the next page of files. | [optional] 
**next_page_token** | **str** | The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.file_list import FileList

# TODO update the JSON string below
json = "{}"
# create an instance of FileList from a JSON string
file_list_instance = FileList.from_json(json)
# print the JSON string representation of the object
print(FileList.to_json())

# convert the object into a dict
file_list_dict = file_list_instance.to_dict()
# create an instance of FileList from a dict
file_list_from_dict = FileList.from_dict(file_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


