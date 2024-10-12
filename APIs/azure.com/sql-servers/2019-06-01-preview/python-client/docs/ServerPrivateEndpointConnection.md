# ServerPrivateEndpointConnection

A private endpoint connection under a server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**properties** | [**PrivateEndpointConnectionProperties**](PrivateEndpointConnectionProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_private_endpoint_connection import ServerPrivateEndpointConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPrivateEndpointConnection from a JSON string
server_private_endpoint_connection_instance = ServerPrivateEndpointConnection.from_json(json)
# print the JSON string representation of the object
print(ServerPrivateEndpointConnection.to_json())

# convert the object into a dict
server_private_endpoint_connection_dict = server_private_endpoint_connection_instance.to_dict()
# create an instance of ServerPrivateEndpointConnection from a dict
server_private_endpoint_connection_from_dict = ServerPrivateEndpointConnection.from_dict(server_private_endpoint_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


