# CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

Resource metrics service provided by Microsoft.Insights resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_specifications** | [**List[CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner]**](CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification import CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a JSON string
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_instance = CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.to_json())

# convert the object into a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_dict = certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_instance.to_dict()
# create an instance of CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a dict
certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_from_dict = CertificateRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_dict(certificate_registration_provider_list_operations200_response_value_inner_properties_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


