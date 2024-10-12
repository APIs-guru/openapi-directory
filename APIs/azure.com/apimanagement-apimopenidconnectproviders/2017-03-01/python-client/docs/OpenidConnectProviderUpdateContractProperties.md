# OpenidConnectProviderUpdateContractProperties

Parameters supplied to the Update OpenID Connect Provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID of developer console which is the client application. | [optional] 
**client_secret** | **str** | Client Secret of developer console which is the client application. | [optional] 
**description** | **str** | User-friendly description of OpenID Connect Provider. | [optional] 
**display_name** | **str** | User-friendly OpenID Connect Provider name. | [optional] 
**metadata_endpoint** | **str** | Metadata endpoint URI. | [optional] 

## Example

```python
from openapi_client.models.openid_connect_provider_update_contract_properties import OpenidConnectProviderUpdateContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OpenidConnectProviderUpdateContractProperties from a JSON string
openid_connect_provider_update_contract_properties_instance = OpenidConnectProviderUpdateContractProperties.from_json(json)
# print the JSON string representation of the object
print(OpenidConnectProviderUpdateContractProperties.to_json())

# convert the object into a dict
openid_connect_provider_update_contract_properties_dict = openid_connect_provider_update_contract_properties_instance.to_dict()
# create an instance of OpenidConnectProviderUpdateContractProperties from a dict
openid_connect_provider_update_contract_properties_from_dict = OpenidConnectProviderUpdateContractProperties.from_dict(openid_connect_provider_update_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


