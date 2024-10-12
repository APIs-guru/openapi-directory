# DomainRegistrationProviderListOperations200ResponseValueInner

Description of an operation available for Microsoft.Web resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**DomainRegistrationProviderListOperations200ResponseValueInnerDisplay**](DomainRegistrationProviderListOperations200ResponseValueInnerDisplay.md) |  | [optional] 
**name** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**properties** | [**DomainRegistrationProviderListOperations200ResponseValueInnerProperties**](DomainRegistrationProviderListOperations200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations200_response_value_inner import DomainRegistrationProviderListOperations200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInner from a JSON string
domain_registration_provider_list_operations200_response_value_inner_instance = DomainRegistrationProviderListOperations200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperations200ResponseValueInner.to_json())

# convert the object into a dict
domain_registration_provider_list_operations200_response_value_inner_dict = domain_registration_provider_list_operations200_response_value_inner_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperations200ResponseValueInner from a dict
domain_registration_provider_list_operations200_response_value_inner_from_dict = DomainRegistrationProviderListOperations200ResponseValueInner.from_dict(domain_registration_provider_list_operations200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


