# IdentityProviderListByService200Response

List of all the Identity Providers configured on the service instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[IdentityProviderListByService200ResponseValueInner]**](IdentityProviderListByService200ResponseValueInner.md) | Identity Provider configuration values. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_by_service200_response import IdentityProviderListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListByService200Response from a JSON string
identity_provider_list_by_service200_response_instance = IdentityProviderListByService200Response.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListByService200Response.to_json())

# convert the object into a dict
identity_provider_list_by_service200_response_dict = identity_provider_list_by_service200_response_instance.to_dict()
# create an instance of IdentityProviderListByService200Response from a dict
identity_provider_list_by_service200_response_from_dict = IdentityProviderListByService200Response.from_dict(identity_provider_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


