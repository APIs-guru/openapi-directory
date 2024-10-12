# FileContainerParameters

Parameters for creating a new file container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_copy_action** | [**PostCopyAction**](PostCopyAction.md) |  | [optional] 
**source_uri** | **str** | Specifies The remote file location. | [optional] 

## Example

```python
from openapi_client.models.file_container_parameters import FileContainerParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FileContainerParameters from a JSON string
file_container_parameters_instance = FileContainerParameters.from_json(json)
# print the JSON string representation of the object
print(FileContainerParameters.to_json())

# convert the object into a dict
file_container_parameters_dict = file_container_parameters_instance.to_dict()
# create an instance of FileContainerParameters from a dict
file_container_parameters_from_dict = FileContainerParameters.from_dict(file_container_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


