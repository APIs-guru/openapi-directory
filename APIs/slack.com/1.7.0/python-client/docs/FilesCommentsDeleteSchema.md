# FilesCommentsDeleteSchema

Schema for successful response files.comments.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_comments_delete_schema import FilesCommentsDeleteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesCommentsDeleteSchema from a JSON string
files_comments_delete_schema_instance = FilesCommentsDeleteSchema.from_json(json)
# print the JSON string representation of the object
print(FilesCommentsDeleteSchema.to_json())

# convert the object into a dict
files_comments_delete_schema_dict = files_comments_delete_schema_instance.to_dict()
# create an instance of FilesCommentsDeleteSchema from a dict
files_comments_delete_schema_from_dict = FilesCommentsDeleteSchema.from_dict(files_comments_delete_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


