# ServerPropertiesForDefaultCreate

The properties used to create a new server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_login** | **str** | The administrator&#39;s login name of a server. Can only be specified when the server is being created (and is required for creation). | 
**administrator_login_password** | **str** | The password of the administrator login. | 

## Example

```python
from openapi_client.models.server_properties_for_default_create import ServerPropertiesForDefaultCreate

# TODO update the JSON string below
json = "{}"
# create an instance of ServerPropertiesForDefaultCreate from a JSON string
server_properties_for_default_create_instance = ServerPropertiesForDefaultCreate.from_json(json)
# print the JSON string representation of the object
print(ServerPropertiesForDefaultCreate.to_json())

# convert the object into a dict
server_properties_for_default_create_dict = server_properties_for_default_create_instance.to_dict()
# create an instance of ServerPropertiesForDefaultCreate from a dict
server_properties_for_default_create_from_dict = ServerPropertiesForDefaultCreate.from_dict(server_properties_for_default_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


