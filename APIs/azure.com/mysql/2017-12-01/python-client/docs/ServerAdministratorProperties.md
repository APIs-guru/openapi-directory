# ServerAdministratorProperties

The properties of an server Administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_type** | **str** | The type of administrator. | 
**login** | **str** | The server administrator login value. | 
**sid** | **str** | The server administrator Sid (Secure ID). | 
**tenant_id** | **str** | The server Active Directory Administrator tenant id. | 

## Example

```python
from openapi_client.models.server_administrator_properties import ServerAdministratorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAdministratorProperties from a JSON string
server_administrator_properties_instance = ServerAdministratorProperties.from_json(json)
# print the JSON string representation of the object
print(ServerAdministratorProperties.to_json())

# convert the object into a dict
server_administrator_properties_dict = server_administrator_properties_instance.to_dict()
# create an instance of ServerAdministratorProperties from a dict
server_administrator_properties_from_dict = ServerAdministratorProperties.from_dict(server_administrator_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


