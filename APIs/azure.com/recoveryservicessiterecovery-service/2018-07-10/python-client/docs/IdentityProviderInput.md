# IdentityProviderInput

Identity provider input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_authority** | **str** | The base authority for Azure Active Directory authentication. | 
**application_id** | **str** | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | 
**audience** | **str** | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | 
**object_id** | **str** | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | 
**tenant_id** | **str** | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | 

## Example

```python
from openapi_client.models.identity_provider_input import IdentityProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderInput from a JSON string
identity_provider_input_instance = IdentityProviderInput.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderInput.to_json())

# convert the object into a dict
identity_provider_input_dict = identity_provider_input_instance.to_dict()
# create an instance of IdentityProviderInput from a dict
identity_provider_input_from_dict = IdentityProviderInput.from_dict(identity_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


