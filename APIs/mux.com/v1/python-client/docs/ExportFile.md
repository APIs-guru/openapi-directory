# ExportFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.export_file import ExportFile

# TODO update the JSON string below
json = "{}"
# create an instance of ExportFile from a JSON string
export_file_instance = ExportFile.from_json(json)
# print the JSON string representation of the object
print(ExportFile.to_json())

# convert the object into a dict
export_file_dict = export_file_instance.to_dict()
# create an instance of ExportFile from a dict
export_file_from_dict = ExportFile.from_dict(export_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


