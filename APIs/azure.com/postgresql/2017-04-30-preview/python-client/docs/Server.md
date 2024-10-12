# Server

Represents a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerProperties**](ServerProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | The location the resource resides in. | 
**tags** | **Dict[str, str]** | Application-specific metadata in the form of key-value pairs. | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server import Server

# TODO update the JSON string below
json = "{}"
# create an instance of Server from a JSON string
server_instance = Server.from_json(json)
# print the JSON string representation of the object
print(Server.to_json())

# convert the object into a dict
server_dict = server_instance.to_dict()
# create an instance of Server from a dict
server_from_dict = Server.from_dict(server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


