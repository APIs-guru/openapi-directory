# OpenidConnectProviderUpdateContract

Parameters supplied to the Update OpenID Connect Provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OpenidConnectProviderUpdateContractProperties**](OpenidConnectProviderUpdateContractProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.openid_connect_provider_update_contract import OpenidConnectProviderUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of OpenidConnectProviderUpdateContract from a JSON string
openid_connect_provider_update_contract_instance = OpenidConnectProviderUpdateContract.from_json(json)
# print the JSON string representation of the object
print(OpenidConnectProviderUpdateContract.to_json())

# convert the object into a dict
openid_connect_provider_update_contract_dict = openid_connect_provider_update_contract_instance.to_dict()
# create an instance of OpenidConnectProviderUpdateContract from a dict
openid_connect_provider_update_contract_from_dict = OpenidConnectProviderUpdateContract.from_dict(openid_connect_provider_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


