# FileServer

The file server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileServerProperties**](FileServerProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_server import FileServer

# TODO update the JSON string below
json = "{}"
# create an instance of FileServer from a JSON string
file_server_instance = FileServer.from_json(json)
# print the JSON string representation of the object
print(FileServer.to_json())

# convert the object into a dict
file_server_dict = file_server_instance.to_dict()
# create an instance of FileServer from a dict
file_server_from_dict = FileServer.from_dict(file_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


