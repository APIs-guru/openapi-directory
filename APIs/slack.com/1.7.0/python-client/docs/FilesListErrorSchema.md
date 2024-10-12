# FilesListErrorSchema

Schema for error response from files.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_list_error_schema import FilesListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesListErrorSchema from a JSON string
files_list_error_schema_instance = FilesListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(FilesListErrorSchema.to_json())

# convert the object into a dict
files_list_error_schema_dict = files_list_error_schema_instance.to_dict()
# create an instance of FilesListErrorSchema from a dict
files_list_error_schema_from_dict = FilesListErrorSchema.from_dict(files_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


