# FilesystemList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filesystems** | [**List[Filesystem]**](Filesystem.md) |  | [optional] 

## Example

```python
from openapi_client.models.filesystem_list import FilesystemList

# TODO update the JSON string below
json = "{}"
# create an instance of FilesystemList from a JSON string
filesystem_list_instance = FilesystemList.from_json(json)
# print the JSON string representation of the object
print(FilesystemList.to_json())

# convert the object into a dict
filesystem_list_dict = filesystem_list_instance.to_dict()
# create an instance of FilesystemList from a dict
filesystem_list_from_dict = FilesystemList.from_dict(filesystem_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


