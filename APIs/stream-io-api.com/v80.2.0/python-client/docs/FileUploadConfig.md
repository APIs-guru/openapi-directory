# FileUploadConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_file_extensions** | **List[str]** |  | 
**allowed_mime_types** | **List[str]** |  | 
**blocked_file_extensions** | **List[str]** |  | 
**blocked_mime_types** | **List[str]** |  | 

## Example

```python
from openapi_client.models.file_upload_config import FileUploadConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FileUploadConfig from a JSON string
file_upload_config_instance = FileUploadConfig.from_json(json)
# print the JSON string representation of the object
print(FileUploadConfig.to_json())

# convert the object into a dict
file_upload_config_dict = file_upload_config_instance.to_dict()
# create an instance of FileUploadConfig from a dict
file_upload_config_from_dict = FileUploadConfig.from_dict(file_upload_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


