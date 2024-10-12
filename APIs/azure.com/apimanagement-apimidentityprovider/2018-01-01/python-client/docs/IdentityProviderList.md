# IdentityProviderList

List of all the Identity Providers configured on the service instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[IdentityProviderContract]**](IdentityProviderContract.md) | Identity Provider configuration values. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list import IdentityProviderList

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderList from a JSON string
identity_provider_list_instance = IdentityProviderList.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderList.to_json())

# convert the object into a dict
identity_provider_list_dict = identity_provider_list_instance.to_dict()
# create an instance of IdentityProviderList from a dict
identity_provider_list_from_dict = IdentityProviderList.from_dict(identity_provider_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


