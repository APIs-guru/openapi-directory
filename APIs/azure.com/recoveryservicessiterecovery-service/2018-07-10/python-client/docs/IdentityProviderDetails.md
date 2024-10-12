# IdentityProviderDetails

Identity provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_authority** | **str** | The base authority for Azure Active Directory authentication. | [optional] 
**application_id** | **str** | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**audience** | **str** | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**object_id** | **str** | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**tenant_id** | **str** | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 

## Example

```python
from openapi_client.models.identity_provider_details import IdentityProviderDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProviderDetails from a JSON string
identity_provider_details_instance = IdentityProviderDetails.from_json(json)
# print the JSON string representation of the object
print(IdentityProviderDetails.to_json())

# convert the object into a dict
identity_provider_details_dict = identity_provider_details_instance.to_dict()
# create an instance of IdentityProviderDetails from a dict
identity_provider_details_from_dict = IdentityProviderDetails.from_dict(identity_provider_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


