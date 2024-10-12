# ClientCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority_url** | **str** | The authority URL used for authentication | [optional] 
**certificate** | **str** | The content of the certificate used for authentication | [optional] 
**client_id** | **str** | The Client ID/Application ID | [optional] 
**client_secret** | **str** | The client secret | [optional] 
**is_cert_auth** | **bool** | Is it using certificate to authenticate. If false then use client secret | [optional] 
**resource_group** | **str** | Resource Group Name | [optional] 
**resource_uri** | **str** | The resource the service principal/app has access to | [optional] 
**subscription_id** | **str** | Subscription Id | [optional] 
**tenant_id** | **str** | The ID of the tenant the service principal/app belongs to | [optional] 
**thumbprint** | **str** | The thumbprint of the certificate above | [optional] 

## Example

```python
from openapi_client.models.client_credentials import ClientCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCredentials from a JSON string
client_credentials_instance = ClientCredentials.from_json(json)
# print the JSON string representation of the object
print(ClientCredentials.to_json())

# convert the object into a dict
client_credentials_dict = client_credentials_instance.to_dict()
# create an instance of ClientCredentials from a dict
client_credentials_from_dict = ClientCredentials.from_dict(client_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


