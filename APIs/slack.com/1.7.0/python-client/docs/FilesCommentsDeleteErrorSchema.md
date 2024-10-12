# FilesCommentsDeleteErrorSchema

Schema for error response files.comments.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_comments_delete_error_schema import FilesCommentsDeleteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesCommentsDeleteErrorSchema from a JSON string
files_comments_delete_error_schema_instance = FilesCommentsDeleteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(FilesCommentsDeleteErrorSchema.to_json())

# convert the object into a dict
files_comments_delete_error_schema_dict = files_comments_delete_error_schema_instance.to_dict()
# create an instance of FilesCommentsDeleteErrorSchema from a dict
files_comments_delete_error_schema_from_dict = FilesCommentsDeleteErrorSchema.from_dict(files_comments_delete_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


