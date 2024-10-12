# ClientSecretCredentials

Message describing Azure Credentials using tenant ID, client ID and secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Azure client ID. | [optional] 
**client_secret** | **str** | Input only. Azure client secret. | [optional] 
**tenant_id** | **str** | Azure tenant ID. | [optional] 

## Example

```python
from openapi_client.models.client_secret_credentials import ClientSecretCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ClientSecretCredentials from a JSON string
client_secret_credentials_instance = ClientSecretCredentials.from_json(json)
# print the JSON string representation of the object
print(ClientSecretCredentials.to_json())

# convert the object into a dict
client_secret_credentials_dict = client_secret_credentials_instance.to_dict()
# create an instance of ClientSecretCredentials from a dict
client_secret_credentials_from_dict = ClientSecretCredentials.from_dict(client_secret_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


