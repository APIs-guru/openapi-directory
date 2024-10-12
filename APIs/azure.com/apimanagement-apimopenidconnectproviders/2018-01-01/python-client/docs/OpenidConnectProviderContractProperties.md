# OpenidConnectProviderContractProperties

OpenID Connect Providers Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID of developer console which is the client application. | 
**client_secret** | **str** | Client Secret of developer console which is the client application. | [optional] 
**description** | **str** | User-friendly description of OpenID Connect Provider. | [optional] 
**display_name** | **str** | User-friendly OpenID Connect Provider name. | 
**metadata_endpoint** | **str** | Metadata endpoint URI. | 

## Example

```python
from openapi_client.models.openid_connect_provider_contract_properties import OpenidConnectProviderContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OpenidConnectProviderContractProperties from a JSON string
openid_connect_provider_contract_properties_instance = OpenidConnectProviderContractProperties.from_json(json)
# print the JSON string representation of the object
print(OpenidConnectProviderContractProperties.to_json())

# convert the object into a dict
openid_connect_provider_contract_properties_dict = openid_connect_provider_contract_properties_instance.to_dict()
# create an instance of OpenidConnectProviderContractProperties from a dict
openid_connect_provider_contract_properties_from_dict = OpenidConnectProviderContractProperties.from_dict(openid_connect_provider_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


