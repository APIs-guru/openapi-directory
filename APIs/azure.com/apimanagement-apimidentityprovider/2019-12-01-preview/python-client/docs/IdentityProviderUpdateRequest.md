# IdentityProviderUpdateRequest

Parameters supplied to update Identity Provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IdentityProviderUpdateRequestProperties**](IdentityProviderUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.identity_provider_update_request import IdentityProviderUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderUpdateRequest from a JSON string
identity_provider_update_request_instance = IdentityProviderUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderUpdateRequest.to_json())

# convert the object into a dict
identity_provider_update_request_dict = identity_provider_update_request_instance.to_dict()
# create an instance of IdentityProviderUpdateRequest from a dict
identity_provider_update_request_from_dict = IdentityProviderUpdateRequest.from_dict(identity_provider_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


