# OpenidConnectProviderContract

OpenID Connect Providers Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID of developer console which is the client application. | 
**client_secret** | **str** | Client Secret of developer console which is the client application. | [optional] 
**description** | **str** | User-friendly description of OpenID Connect Provider. | [optional] 
**id** | **str** | OpenID Connect Provider identifier. | [optional] 
**metadata_endpoint** | **str** | Metadata endpoint URI. | 
**name** | **str** | User-friendly OpenID Connect Provider name. | 

## Example

```python
from openapi_client.models.openid_connect_provider_contract import OpenidConnectProviderContract

# TODO update the JSON string below
json = "{}"
# create an instance of OpenidConnectProviderContract from a JSON string
openid_connect_provider_contract_instance = OpenidConnectProviderContract.from_json(json)
# print the JSON string representation of the object
print(OpenidConnectProviderContract.to_json())

# convert the object into a dict
openid_connect_provider_contract_dict = openid_connect_provider_contract_instance.to_dict()
# create an instance of OpenidConnectProviderContract from a dict
openid_connect_provider_contract_from_dict = OpenidConnectProviderContract.from_dict(openid_connect_provider_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


