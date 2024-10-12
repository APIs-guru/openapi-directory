# ServerAdministratorResourceListResult

The response to a list Active Directory Administrators request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ServerAdministratorResource]**](ServerAdministratorResource.md) | The list of server Active Directory Administrators for the server. | [optional] 

## Example

```python
from openapi_client.models.server_administrator_resource_list_result import ServerAdministratorResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAdministratorResourceListResult from a JSON string
server_administrator_resource_list_result_instance = ServerAdministratorResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ServerAdministratorResourceListResult.to_json())

# convert the object into a dict
server_administrator_resource_list_result_dict = server_administrator_resource_list_result_instance.to_dict()
# create an instance of ServerAdministratorResourceListResult from a dict
server_administrator_resource_list_result_from_dict = ServerAdministratorResourceListResult.from_dict(server_administrator_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


