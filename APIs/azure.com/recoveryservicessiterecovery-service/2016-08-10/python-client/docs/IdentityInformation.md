# IdentityInformation

Identity details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_authority** | **str** | The base authority for Azure Active Directory authentication. | [optional] 
**application_id** | **str** | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**audience** | **str** | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**certificate_thumbprint** | **str** | The certificate thumbprint. Applicable only if IdentityProviderType is RecoveryServicesActiveDirectory. | [optional] 
**identity_provider_type** | **str** | The identity provider type. Value is the ToString() of a IdentityProviderType value. | [optional] 
**object_id** | **str** | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 
**tenant_id** | **str** | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | [optional] 

## Example

```python
from openapi_client.models.identity_information import IdentityInformation

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityInformation from a JSON string
identity_information_instance = IdentityInformation.from_json(json)
# print the JSON string representation of the object
print(IdentityInformation.to_json())

# convert the object into a dict
identity_information_dict = identity_information_instance.to_dict()
# create an instance of IdentityInformation from a dict
identity_information_from_dict = IdentityInformation.from_dict(identity_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


