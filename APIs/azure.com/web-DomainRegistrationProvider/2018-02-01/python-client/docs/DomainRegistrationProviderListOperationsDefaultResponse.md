# DomainRegistrationProviderListOperationsDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DomainRegistrationProviderListOperationsDefaultResponseError**](DomainRegistrationProviderListOperationsDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations_default_response import DomainRegistrationProviderListOperationsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperationsDefaultResponse from a JSON string
domain_registration_provider_list_operations_default_response_instance = DomainRegistrationProviderListOperationsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperationsDefaultResponse.to_json())

# convert the object into a dict
domain_registration_provider_list_operations_default_response_dict = domain_registration_provider_list_operations_default_response_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperationsDefaultResponse from a dict
domain_registration_provider_list_operations_default_response_from_dict = DomainRegistrationProviderListOperationsDefaultResponse.from_dict(domain_registration_provider_list_operations_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


