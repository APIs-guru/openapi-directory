# FileContainer

File container entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileContainerAdminProperties**](FileContainerAdminProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_container import FileContainer

# TODO update the JSON string below
json = "{}"
# create an instance of FileContainer from a JSON string
file_container_instance = FileContainer.from_json(json)
# print the JSON string representation of the object
print(FileContainer.to_json())

# convert the object into a dict
file_container_dict = file_container_instance.to_dict()
# create an instance of FileContainer from a dict
file_container_from_dict = FileContainer.from_dict(file_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


