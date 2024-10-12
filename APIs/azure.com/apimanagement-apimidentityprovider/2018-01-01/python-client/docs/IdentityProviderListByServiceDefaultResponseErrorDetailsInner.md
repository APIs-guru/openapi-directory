# IdentityProviderListByServiceDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_by_service_default_response_error_details_inner import IdentityProviderListByServiceDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListByServiceDefaultResponseErrorDetailsInner from a JSON string
identity_provider_list_by_service_default_response_error_details_inner_instance = IdentityProviderListByServiceDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListByServiceDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
identity_provider_list_by_service_default_response_error_details_inner_dict = identity_provider_list_by_service_default_response_error_details_inner_instance.to_dict()
# create an instance of IdentityProviderListByServiceDefaultResponseErrorDetailsInner from a dict
identity_provider_list_by_service_default_response_error_details_inner_from_dict = IdentityProviderListByServiceDefaultResponseErrorDetailsInner.from_dict(identity_provider_list_by_service_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


