# CertificateRegistrationProviderListOperations200ResponseValueInner

Description of an operation available for Microsoft.Web resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**CertificateRegistrationProviderListOperations200ResponseValueInnerDisplay**](CertificateRegistrationProviderListOperations200ResponseValueInnerDisplay.md) |  | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**properties** | [**CertificateRegistrationProviderListOperations200ResponseValueInnerProperties**](CertificateRegistrationProviderListOperations200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_registration_provider_list_operations200_response_value_inner import CertificateRegistrationProviderListOperations200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInner from a JSON string
certificate_registration_provider_list_operations200_response_value_inner_instance = CertificateRegistrationProviderListOperations200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(CertificateRegistrationProviderListOperations200ResponseValueInner.to_json())

# convert the object into a dict
certificate_registration_provider_list_operations200_response_value_inner_dict = certificate_registration_provider_list_operations200_response_value_inner_instance.to_dict()
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInner from a dict
certificate_registration_provider_list_operations200_response_value_inner_from_dict = CertificateRegistrationProviderListOperations200ResponseValueInner.from_dict(certificate_registration_provider_list_operations200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


