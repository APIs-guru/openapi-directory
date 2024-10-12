# CertificateRegistrationProviderListOperations200ResponseValueInnerProperties

Properties available for a Microsoft.Web resource provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification**](CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_registration_provider_list_operations200_response_value_inner_properties import CertificateRegistrationProviderListOperations200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerProperties from a JSON string
certificate_registration_provider_list_operations200_response_value_inner_properties_instance = CertificateRegistrationProviderListOperations200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateRegistrationProviderListOperations200ResponseValueInnerProperties.to_json())

# convert the object into a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_dict = certificate_registration_provider_list_operations200_response_value_inner_properties_instance.to_dict()
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerProperties from a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_from_dict = CertificateRegistrationProviderListOperations200ResponseValueInnerProperties.from_dict(certificate_registration_provider_list_operations200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


