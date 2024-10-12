# IdentityProviderListByService200ResponseValueInner

Identity Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IdentityProviderListByService200ResponseValueInnerProperties**](IdentityProviderListByService200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_by_service200_response_value_inner import IdentityProviderListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListByService200ResponseValueInner from a JSON string
identity_provider_list_by_service200_response_value_inner_instance = IdentityProviderListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListByService200ResponseValueInner.to_json())

# convert the object into a dict
identity_provider_list_by_service200_response_value_inner_dict = identity_provider_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of IdentityProviderListByService200ResponseValueInner from a dict
identity_provider_list_by_service200_response_value_inner_from_dict = IdentityProviderListByService200ResponseValueInner.from_dict(identity_provider_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


