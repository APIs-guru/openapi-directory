# FilesSharedPublicURLErrorSchema

Schema for error response from files.sharedPublicURL method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_shared_public_url_error_schema import FilesSharedPublicURLErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesSharedPublicURLErrorSchema from a JSON string
files_shared_public_url_error_schema_instance = FilesSharedPublicURLErrorSchema.from_json(json)
# print the JSON string representation of the object
print(FilesSharedPublicURLErrorSchema.to_json())

# convert the object into a dict
files_shared_public_url_error_schema_dict = files_shared_public_url_error_schema_instance.to_dict()
# create an instance of FilesSharedPublicURLErrorSchema from a dict
files_shared_public_url_error_schema_from_dict = FilesSharedPublicURLErrorSchema.from_dict(files_shared_public_url_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


