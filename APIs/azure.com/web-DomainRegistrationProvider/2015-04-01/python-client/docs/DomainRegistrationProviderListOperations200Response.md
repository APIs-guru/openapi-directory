# DomainRegistrationProviderListOperations200Response

Collection of Azure resource manager operation metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DomainRegistrationProviderListOperations200ResponseValueInner]**](DomainRegistrationProviderListOperations200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations200_response import DomainRegistrationProviderListOperations200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperations200Response from a JSON string
domain_registration_provider_list_operations200_response_instance = DomainRegistrationProviderListOperations200Response.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperations200Response.to_json())

# convert the object into a dict
domain_registration_provider_list_operations200_response_dict = domain_registration_provider_list_operations200_response_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperations200Response from a dict
domain_registration_provider_list_operations200_response_from_dict = DomainRegistrationProviderListOperations200Response.from_dict(domain_registration_provider_list_operations200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


