# OpenidConnectProviderContract

OpenId Connect Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OpenidConnectProviderContractProperties**](OpenidConnectProviderContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

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


