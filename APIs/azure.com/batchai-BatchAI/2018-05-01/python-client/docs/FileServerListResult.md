# FileServerListResult

Values returned by the File Server List operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] [readonly] 
**value** | [**List[FileServer]**](FileServer.md) | The collection of File Servers. | [optional] 

## Example

```python
from openapi_client.models.file_server_list_result import FileServerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerListResult from a JSON string
file_server_list_result_instance = FileServerListResult.from_json(json)
# print the JSON string representation of the object
print(FileServerListResult.to_json())

# convert the object into a dict
file_server_list_result_dict = file_server_list_result_instance.to_dict()
# create an instance of FileServerListResult from a dict
file_server_list_result_from_dict = FileServerListResult.from_dict(file_server_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


