# ServerPropertiesForCreate

The properties used to create a new server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_mode** | **str** | The mode to create a new server. | 
**ssl_enforcement** | [**SslEnforcement**](SslEnforcement.md) |  | [optional] 
**storage_mb** | **int** | The maximum storage allowed for a server. | [optional] 
**version** | [**ServerVersion**](ServerVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.server_properties_for_create import ServerPropertiesForCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPropertiesForCreate from a JSON string
server_properties_for_create_instance = ServerPropertiesForCreate.from_json(json)
# print the JSON string representation of the object
print(ServerPropertiesForCreate.to_json())

# convert the object into a dict
server_properties_for_create_dict = server_properties_for_create_instance.to_dict()
# create an instance of ServerPropertiesForCreate from a dict
server_properties_for_create_from_dict = ServerPropertiesForCreate.from_dict(server_properties_for_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


