# ListVersionFilesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[VersionFile]**](VersionFile.md) |  The list of paths to the hashes of the files in the specified version. | [optional] 
**next_page_token** | **str** | The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to &#x60;ListVersionFiles&#x60;. Page tokens are short-lived and should not be stored. | [optional] 

## Example

```python
from openapi_client.models.list_version_files_response import ListVersionFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVersionFilesResponse from a JSON string
list_version_files_response_instance = ListVersionFilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListVersionFilesResponse.to_json())

# convert the object into a dict
list_version_files_response_dict = list_version_files_response_instance.to_dict()
# create an instance of ListVersionFilesResponse from a dict
list_version_files_response_from_dict = ListVersionFilesResponse.from_dict(list_version_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


