# IdentityProviderGet200Response

Identity Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IdentityProviderListByService200ResponseValueInnerProperties**](IdentityProviderListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.identity_provider_get200_response import IdentityProviderGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderGet200Response from a JSON string
identity_provider_get200_response_instance = IdentityProviderGet200Response.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderGet200Response.to_json())

# convert the object into a dict
identity_provider_get200_response_dict = identity_provider_get200_response_instance.to_dict()
# create an instance of IdentityProviderGet200Response from a dict
identity_provider_get200_response_from_dict = IdentityProviderGet200Response.from_dict(identity_provider_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


