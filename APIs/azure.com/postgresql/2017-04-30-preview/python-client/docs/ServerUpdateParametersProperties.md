# ServerUpdateParametersProperties

The properties that can be updated for a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login_password** | **str** | The password of the administrator login. | [optional] 
**ssl_enforcement** | [**SslEnforcement**](SslEnforcement.md) |  | [optional] 
**storage_mb** | **int** | The max storage allowed for a server. | [optional] 
**version** | [**ServerVersion**](ServerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_update_parameters_properties import ServerUpdateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerUpdateParametersProperties from a JSON string
server_update_parameters_properties_instance = ServerUpdateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(ServerUpdateParametersProperties.to_json())

# convert the object into a dict
server_update_parameters_properties_dict = server_update_parameters_properties_instance.to_dict()
# create an instance of ServerUpdateParametersProperties from a dict
server_update_parameters_properties_from_dict = ServerUpdateParametersProperties.from_dict(server_update_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


