# FileContainersList

List of file containers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token. | [optional] 
**value** | [**List[FileContainer]**](FileContainer.md) | List of file containers. | [optional] 

## Example

```python
from openapi_client.models.file_containers_list import FileContainersList

# TODO update the JSON string below
json = "{}"
# create an instance of FileContainersList from a JSON string
file_containers_list_instance = FileContainersList.from_json(json)
# print the JSON string representation of the object
print(FileContainersList.to_json())

# convert the object into a dict
file_containers_list_dict = file_containers_list_instance.to_dict()
# create an instance of FileContainersList from a dict
file_containers_list_from_dict = FileContainersList.from_dict(file_containers_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


