# IdentityProviderListByServiceDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[IdentityProviderListByServiceDefaultResponseDetailsInner]**](IdentityProviderListByServiceDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_list_by_service_default_response import IdentityProviderListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderListByServiceDefaultResponse from a JSON string
identity_provider_list_by_service_default_response_instance = IdentityProviderListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderListByServiceDefaultResponse.to_json())

# convert the object into a dict
identity_provider_list_by_service_default_response_dict = identity_provider_list_by_service_default_response_instance.to_dict()
# create an instance of IdentityProviderListByServiceDefaultResponse from a dict
identity_provider_list_by_service_default_response_from_dict = IdentityProviderListByServiceDefaultResponse.from_dict(identity_provider_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


