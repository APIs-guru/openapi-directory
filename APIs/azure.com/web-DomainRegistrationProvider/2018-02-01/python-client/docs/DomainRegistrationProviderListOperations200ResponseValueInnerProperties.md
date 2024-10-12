# DomainRegistrationProviderListOperations200ResponseValueInnerProperties

Properties available for a Microsoft.Web resource provider operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_specification** | [**DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification**](DomainRegistrationProviderListOperations200ResponseValueInnerPropertiesServiceSpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations200_response_value_inner_properties import DomainRegistrationProviderListOperations200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInnerProperties from a JSON string
domain_registration_provider_list_operations200_response_value_inner_properties_instance = DomainRegistrationProviderListOperations200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperations200ResponseValueInnerProperties.to_json())

# convert the object into a dict
domain_registration_provider_list_operations200_response_value_inner_properties_dict = domain_registration_provider_list_operations200_response_value_inner_properties_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInnerProperties from a dict
domain_registration_provider_list_operations200_response_value_inner_properties_from_dict = DomainRegistrationProviderListOperations200ResponseValueInnerProperties.from_dict(domain_registration_provider_list_operations200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


