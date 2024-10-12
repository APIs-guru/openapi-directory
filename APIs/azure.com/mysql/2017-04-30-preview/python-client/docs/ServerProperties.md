# ServerProperties

The properties of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | The administrator&#39;s login name of a server. Can only be specified when the server is being created (and is required for creation). | [optional] 
**fully_qualified_domain_name** | **str** | The fully qualified domain name of a server. | [optional] 
**ssl_enforcement** | [**SslEnforcement**](SslEnforcement.md) |  | [optional] 
**storage_mb** | **int** | The maximum storage allowed for a server. | [optional] 
**user_visible_state** | **str** | A state of a server that is visible to user. | [optional] 
**version** | [**ServerVersion**](ServerVersion.md) |  | [optional] 

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


