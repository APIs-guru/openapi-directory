# FilesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_id** | **str** | ID of the drive to filter on | [optional] 
**folder_id** | **str** | ID of the folder to filter on. The root folder has an alias \&quot;root\&quot; | [optional] 
**shared** | **bool** | Only return files and folders that are shared | [optional] 

## Example

```python
from openapi_client.models.files_filter import FilesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of FilesFilter from a JSON string
files_filter_instance = FilesFilter.from_json(json)
# print the JSON string representation of the object
print(FilesFilter.to_json())

# convert the object into a dict
files_filter_dict = files_filter_instance.to_dict()
# create an instance of FilesFilter from a dict
files_filter_from_dict = FilesFilter.from_dict(files_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


