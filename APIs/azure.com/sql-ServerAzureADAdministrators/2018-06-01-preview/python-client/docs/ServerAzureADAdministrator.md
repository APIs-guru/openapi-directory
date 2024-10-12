# ServerAzureADAdministrator

Azure Active Directory administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AdministratorProperties**](AdministratorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_azure_ad_administrator import ServerAzureADAdministrator

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAzureADAdministrator from a JSON string
server_azure_ad_administrator_instance = ServerAzureADAdministrator.from_json(json)
# print the JSON string representation of the object
print(ServerAzureADAdministrator.to_json())

# convert the object into a dict
server_azure_ad_administrator_dict = server_azure_ad_administrator_instance.to_dict()
# create an instance of ServerAzureADAdministrator from a dict
server_azure_ad_administrator_from_dict = ServerAzureADAdministrator.from_dict(server_azure_ad_administrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


