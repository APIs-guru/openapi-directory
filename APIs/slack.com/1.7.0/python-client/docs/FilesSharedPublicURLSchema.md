# FilesSharedPublicURLSchema

Schema for successful response from files.sharedPublicURL method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_shared_public_url_schema import FilesSharedPublicURLSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesSharedPublicURLSchema from a JSON string
files_shared_public_url_schema_instance = FilesSharedPublicURLSchema.from_json(json)
# print the JSON string representation of the object
print(FilesSharedPublicURLSchema.to_json())

# convert the object into a dict
files_shared_public_url_schema_dict = files_shared_public_url_schema_instance.to_dict()
# create an instance of FilesSharedPublicURLSchema from a dict
files_shared_public_url_schema_from_dict = FilesSharedPublicURLSchema.from_dict(files_shared_public_url_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


