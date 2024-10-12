# ExpansionFilesUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expansion_file** | [**ExpansionFile**](ExpansionFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.expansion_files_upload_response import ExpansionFilesUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExpansionFilesUploadResponse from a JSON string
expansion_files_upload_response_instance = ExpansionFilesUploadResponse.from_json(json)
# print the JSON string representation of the object
print(ExpansionFilesUploadResponse.to_json())

# convert the object into a dict
expansion_files_upload_response_dict = expansion_files_upload_response_instance.to_dict()
# create an instance of ExpansionFilesUploadResponse from a dict
expansion_files_upload_response_from_dict = ExpansionFilesUploadResponse.from_dict(expansion_files_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


