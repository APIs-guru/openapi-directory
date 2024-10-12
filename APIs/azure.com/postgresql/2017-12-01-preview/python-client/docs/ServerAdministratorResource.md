# ServerAdministratorResource

Represents a and external administrator to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServerAdministratorProperties**](ServerAdministratorProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_administrator_resource import ServerAdministratorResource

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAdministratorResource from a JSON string
server_administrator_resource_instance = ServerAdministratorResource.from_json(json)
# print the JSON string representation of the object
print(ServerAdministratorResource.to_json())

# convert the object into a dict
server_administrator_resource_dict = server_administrator_resource_instance.to_dict()
# create an instance of ServerAdministratorResource from a dict
server_administrator_resource_from_dict = ServerAdministratorResource.from_dict(server_administrator_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


