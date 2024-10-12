# CertificateRegistrationProviderListOperations200Response

Collection of Azure resource manager operation metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[CertificateRegistrationProviderListOperations200ResponseValueInner]**](CertificateRegistrationProviderListOperations200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.certificate_registration_provider_list_operations200_response import CertificateRegistrationProviderListOperations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRegistrationProviderListOperations200Response from a JSON string
certificate_registration_provider_list_operations200_response_instance = CertificateRegistrationProviderListOperations200Response.from_json(json)
# print the JSON string representation of the object
print(CertificateRegistrationProviderListOperations200Response.to_json())

# convert the object into a dict
certificate_registration_provider_list_operations200_response_dict = certificate_registration_provider_list_operations200_response_instance.to_dict()
# create an instance of CertificateRegistrationProviderListOperations200Response from a dict
certificate_registration_provider_list_operations200_response_from_dict = CertificateRegistrationProviderListOperations200Response.from_dict(certificate_registration_provider_list_operations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


