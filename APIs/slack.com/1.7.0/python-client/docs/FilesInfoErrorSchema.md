# FilesInfoErrorSchema

Schema for error response from files.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.files_info_error_schema import FilesInfoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesInfoErrorSchema from a JSON string
files_info_error_schema_instance = FilesInfoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(FilesInfoErrorSchema.to_json())

# convert the object into a dict
files_info_error_schema_dict = files_info_error_schema_instance.to_dict()
# create an instance of FilesInfoErrorSchema from a dict
files_info_error_schema_from_dict = FilesInfoErrorSchema.from_dict(files_info_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


