# FilesInfoSchema

Schema for successful response from files.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **List[object]** |  | 
**content_html** | **object** |  | [optional] 
**editor** | **str** |  | [optional] 
**file** | [**ObjsFile**](ObjsFile.md) |  | 
**ok** | **bool** |  | 
**paging** | [**ObjsPaging**](ObjsPaging.md) |  | [optional] 
**response_metadata** | [**List[ObjsResponseMetadataInner]**](ObjsResponseMetadataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.files_info_schema import FilesInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of FilesInfoSchema from a JSON string
files_info_schema_instance = FilesInfoSchema.from_json(json)
# print the JSON string representation of the object
print(FilesInfoSchema.to_json())

# convert the object into a dict
files_info_schema_dict = files_info_schema_instance.to_dict()
# create an instance of FilesInfoSchema from a dict
files_info_schema_from_dict = FilesInfoSchema.from_dict(files_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


