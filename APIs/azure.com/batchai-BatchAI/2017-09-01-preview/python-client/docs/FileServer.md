# FileServer

Contains information about the File Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileServerProperties**](FileServerProperties.md) |  | [optional] 
**id** | **str** | The ID of the resource | [optional] [readonly] 
**location** | **str** | The location of the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource | [optional] [readonly] 

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


