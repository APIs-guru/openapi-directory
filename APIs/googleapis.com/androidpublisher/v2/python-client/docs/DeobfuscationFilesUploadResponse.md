# DeobfuscationFilesUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deobfuscation_file** | [**DeobfuscationFile**](DeobfuscationFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.deobfuscation_files_upload_response import DeobfuscationFilesUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeobfuscationFilesUploadResponse from a JSON string
deobfuscation_files_upload_response_instance = DeobfuscationFilesUploadResponse.from_json(json)
# print the JSON string representation of the object
print(DeobfuscationFilesUploadResponse.to_json())

# convert the object into a dict
deobfuscation_files_upload_response_dict = deobfuscation_files_upload_response_instance.to_dict()
# create an instance of DeobfuscationFilesUploadResponse from a dict
deobfuscation_files_upload_response_from_dict = DeobfuscationFilesUploadResponse.from_dict(deobfuscation_files_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


