# FilesUploadSchema

Schema for successful response files.upload method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_upload_schema import FilesUploadSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesUploadSchema from a JSON string
files_upload_schema_instance = FilesUploadSchema.from_json(json)
# print the JSON string representation of the object
print(FilesUploadSchema.to_json())

# convert the object into a dict
files_upload_schema_dict = files_upload_schema_instance.to_dict()
# create an instance of FilesUploadSchema from a dict
files_upload_schema_from_dict = FilesUploadSchema.from_dict(files_upload_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


