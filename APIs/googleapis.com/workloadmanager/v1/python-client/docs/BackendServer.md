# BackendServer

The backend server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_file** | **str** | Output only. The backup file | [optional] [readonly] 
**backup_schedule** | **str** | Output only. The backup schedule | [optional] [readonly] 
**name** | **str** | Output only. The backend name | [optional] [readonly] 
**os_version** | **str** | Output only. OS information | [optional] [readonly] 
**resources** | [**List[CloudResource]**](CloudResource.md) | Output only. resources in the component | [optional] [readonly] 

## Example

```python
from openapi_client.models.backend_server import BackendServer

# TODO update the JSON string below
json = "{}"
# create an instance of BackendServer from a JSON string
backend_server_instance = BackendServer.from_json(json)
# print the JSON string representation of the object
print(BackendServer.to_json())

# convert the object into a dict
backend_server_dict = backend_server_instance.to_dict()
# create an instance of BackendServer from a dict
backend_server_from_dict = BackendServer.from_dict(backend_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


