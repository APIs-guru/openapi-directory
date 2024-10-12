# ListFilesResponse

The response from listing files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[File]**](File.md) | The files returned. | [optional] 
**next_page_token** | **str** | The token to retrieve the next page of files, or empty if there are no more files to return. | [optional] 

## Example

```python
from openapi_client.models.list_files_response import ListFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFilesResponse from a JSON string
list_files_response_instance = ListFilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFilesResponse.to_json())

# convert the object into a dict
list_files_response_dict = list_files_response_instance.to_dict()
# create an instance of ListFilesResponse from a dict
list_files_response_from_dict = ListFilesResponse.from_dict(list_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


