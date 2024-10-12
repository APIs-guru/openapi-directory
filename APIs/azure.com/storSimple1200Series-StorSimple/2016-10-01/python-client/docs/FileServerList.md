# FileServerList

Collection of file servers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FileServer]**](FileServer.md) | The value. | 

## Example

```python
from openapi_client.models.file_server_list import FileServerList

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerList from a JSON string
file_server_list_instance = FileServerList.from_json(json)
# print the JSON string representation of the object
print(FileServerList.to_json())

# convert the object into a dict
file_server_list_dict = file_server_list_instance.to_dict()
# create an instance of FileServerList from a dict
file_server_list_from_dict = FileServerList.from_dict(file_server_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


