# FilesRevokePublicURLErrorSchema

Schema for error response from files.revokePublicURL method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_revoke_public_url_error_schema import FilesRevokePublicURLErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesRevokePublicURLErrorSchema from a JSON string
files_revoke_public_url_error_schema_instance = FilesRevokePublicURLErrorSchema.from_json(json)
# print the JSON string representation of the object
print(FilesRevokePublicURLErrorSchema.to_json())

# convert the object into a dict
files_revoke_public_url_error_schema_dict = files_revoke_public_url_error_schema_instance.to_dict()
# create an instance of FilesRevokePublicURLErrorSchema from a dict
files_revoke_public_url_error_schema_from_dict = FilesRevokePublicURLErrorSchema.from_dict(files_revoke_public_url_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


