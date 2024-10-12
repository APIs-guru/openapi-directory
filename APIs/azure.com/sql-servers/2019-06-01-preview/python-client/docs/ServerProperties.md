# ServerProperties

The properties of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | Administrator username for the server. Once created it cannot be changed. | [optional] 
**administrator_login_password** | **str** | The administrator login password (required for server creation). | [optional] 
**fully_qualified_domain_name** | **str** | The fully qualified domain name of the server. | [optional] [readonly] 
**private_endpoint_connections** | [**List[ServerPrivateEndpointConnection]**](ServerPrivateEndpointConnection.md) | List of private endpoint connections on a server | [optional] [readonly] 
**state** | **str** | The state of the server. | [optional] [readonly] 
**version** | **str** | The version of the server. | [optional] 

## Example

```python
from openapi_client.models.server_properties import ServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerProperties from a JSON string
server_properties_instance = ServerProperties.from_json(json)
# print the JSON string representation of the object
print(ServerProperties.to_json())

# convert the object into a dict
server_properties_dict = server_properties_instance.to_dict()
# create an instance of ServerProperties from a dict
server_properties_from_dict = ServerProperties.from_dict(server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


