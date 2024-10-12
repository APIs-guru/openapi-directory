# FilesDeleteSchema

Schema for successful response files.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_delete_schema import FilesDeleteSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesDeleteSchema from a JSON string
files_delete_schema_instance = FilesDeleteSchema.from_json(json)
# print the JSON string representation of the object
print(FilesDeleteSchema.to_json())

# convert the object into a dict
files_delete_schema_dict = files_delete_schema_instance.to_dict()
# create an instance of FilesDeleteSchema from a dict
files_delete_schema_from_dict = FilesDeleteSchema.from_dict(files_delete_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


