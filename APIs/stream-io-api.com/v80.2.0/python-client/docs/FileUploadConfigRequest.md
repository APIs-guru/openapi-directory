# FileUploadConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_file_extensions** | **List[str]** |  | [optional] 
**allowed_mime_types** | **List[str]** |  | [optional] 
**blocked_file_extensions** | **List[str]** |  | [optional] 
**blocked_mime_types** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.file_upload_config_request import FileUploadConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadConfigRequest from a JSON string
file_upload_config_request_instance = FileUploadConfigRequest.from_json(json)
# print the JSON string representation of the object
print(FileUploadConfigRequest.to_json())

# convert the object into a dict
file_upload_config_request_dict = file_upload_config_request_instance.to_dict()
# create an instance of FileUploadConfigRequest from a dict
file_upload_config_request_from_dict = FileUploadConfigRequest.from_dict(file_upload_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


