# USqlAssemblyFileInfo

A Data Lake Analytics catalog U-SQL assembly file information item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_path** | **str** | The content path to the assembly file. | [optional] 
**original_path** | **str** | The original path to the assembly file. | [optional] 
**type** | **str** | the assembly file type. | [optional] 

## Example

```python
from openapi_client.models.u_sql_assembly_file_info import USqlAssemblyFileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of USqlAssemblyFileInfo from a JSON string
u_sql_assembly_file_info_instance = USqlAssemblyFileInfo.from_json(json)
# print the JSON string representation of the object
print(USqlAssemblyFileInfo.to_json())

# convert the object into a dict
u_sql_assembly_file_info_dict = u_sql_assembly_file_info_instance.to_dict()
# create an instance of USqlAssemblyFileInfo from a dict
u_sql_assembly_file_info_from_dict = USqlAssemblyFileInfo.from_dict(u_sql_assembly_file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


