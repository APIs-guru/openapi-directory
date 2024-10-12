# FilesListSchema

Schema for successful response from files.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[ObjsFile]**](ObjsFile.md) |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | 

## Example

```python
from openapi_client.models.files_list_schema import FilesListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesListSchema from a JSON string
files_list_schema_instance = FilesListSchema.from_json(json)
# print the JSON string representation of the object
print(FilesListSchema.to_json())

# convert the object into a dict
files_list_schema_dict = files_list_schema_instance.to_dict()
# create an instance of FilesListSchema from a dict
files_list_schema_from_dict = FilesListSchema.from_dict(files_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


