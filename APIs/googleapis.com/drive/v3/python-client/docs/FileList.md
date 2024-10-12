# FileList

A list of files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[File]**](File.md) | The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**incomplete_search** | **bool** | Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the &#39;allDrives&#39; corpora, but all corpora couldn&#39;t be searched. When this happens, it&#39;s suggested that clients narrow their query by choosing a different corpus such as &#39;user&#39; or &#39;drive&#39;. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#fileList\&quot;&#x60;. | [optional] [default to 'drive#fileList']
**next_page_token** | **str** | The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 

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


