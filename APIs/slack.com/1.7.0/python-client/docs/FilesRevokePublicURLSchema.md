# FilesRevokePublicURLSchema

Schema for successful response from files.revokePublicURL method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_revoke_public_url_schema import FilesRevokePublicURLSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesRevokePublicURLSchema from a JSON string
files_revoke_public_url_schema_instance = FilesRevokePublicURLSchema.from_json(json)
# print the JSON string representation of the object
print(FilesRevokePublicURLSchema.to_json())

# convert the object into a dict
files_revoke_public_url_schema_dict = files_revoke_public_url_schema_instance.to_dict()
# create an instance of FilesRevokePublicURLSchema from a dict
files_revoke_public_url_schema_from_dict = FilesRevokePublicURLSchema.from_dict(files_revoke_public_url_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


