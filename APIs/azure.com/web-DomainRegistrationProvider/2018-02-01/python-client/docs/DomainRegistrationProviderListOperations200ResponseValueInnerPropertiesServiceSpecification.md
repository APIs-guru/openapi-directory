# DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

Resource metrics service provided by Microsoft.Insights resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_specifications** | [**List[DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationLogSpecificationsInner]**](DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationLogSpecificationsInner.md) |  | [optional] 
**metric_specifications** | [**List[DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner]**](DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecificationMetricSpecificationsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations200_response_value_inner_properties_service_specification import DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a JSON string
domain_registration_provider_list_operations200_response_value_inner_properties_service_specification_instance = DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.to_json())

# convert the object into a dict
domain_registration_provider_list_operations200_response_value_inner_properties_service_specification_dict = domain_registration_provider_list_operations200_response_value_inner_properties_service_specification_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification from a dict
domain_registration_provider_list_operations200_response_value_inner_properties_service_specification_from_dict = DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.from_dict(domain_registration_provider_list_operations200_response_value_inner_properties_service_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


