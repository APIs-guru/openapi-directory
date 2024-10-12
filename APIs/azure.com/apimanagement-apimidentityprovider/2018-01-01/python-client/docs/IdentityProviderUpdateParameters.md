# IdentityProviderUpdateParameters

Parameters supplied to update Identity Provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IdentityProviderUpdateProperties**](IdentityProviderUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.identity_provider_update_parameters import IdentityProviderUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderUpdateParameters from a JSON string
identity_provider_update_parameters_instance = IdentityProviderUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderUpdateParameters.to_json())

# convert the object into a dict
identity_provider_update_parameters_dict = identity_provider_update_parameters_instance.to_dict()
# create an instance of IdentityProviderUpdateParameters from a dict
identity_provider_update_parameters_from_dict = IdentityProviderUpdateParameters.from_dict(identity_provider_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


