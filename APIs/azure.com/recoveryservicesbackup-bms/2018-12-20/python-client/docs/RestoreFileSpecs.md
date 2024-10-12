# RestoreFileSpecs

Restore file specs like file path, type and target folder path info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_spec_type** | **str** | Indicates what the Path variable stands for | [optional] 
**path** | **str** | Source File/Folder path | [optional] 
**target_folder_path** | **str** | Destination folder path in target FileShare | [optional] 

## Example

```python
from openapi_client.models.restore_file_specs import RestoreFileSpecs

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreFileSpecs from a JSON string
restore_file_specs_instance = RestoreFileSpecs.from_json(json)
# print the JSON string representation of the object
print(RestoreFileSpecs.to_json())

# convert the object into a dict
restore_file_specs_dict = restore_file_specs_instance.to_dict()
# create an instance of RestoreFileSpecs from a dict
restore_file_specs_from_dict = RestoreFileSpecs.from_dict(restore_file_specs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


