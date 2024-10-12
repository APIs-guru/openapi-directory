# RegisteredServer

Registered Server resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**RegisteredServerProperties**](RegisteredServerProperties.md) |  | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.registered_server import RegisteredServer

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServer from a JSON string
registered_server_instance = RegisteredServer.from_json(json)
# print the JSON string representation of the object
print(RegisteredServer.to_json())

# convert the object into a dict
registered_server_dict = registered_server_instance.to_dict()
# create an instance of RegisteredServer from a dict
registered_server_from_dict = RegisteredServer.from_dict(registered_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


