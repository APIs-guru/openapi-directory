# DomainRegistrationProviderListOperationsDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[DomainRegistrationProviderListOperationsDefaultResponseErrorDetailsInner]**](DomainRegistrationProviderListOperationsDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_registration_provider_list_operations_default_response_error import DomainRegistrationProviderListOperationsDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of DomainRegistrationProviderListOperationsDefaultResponseError from a JSON string
domain_registration_provider_list_operations_default_response_error_instance = DomainRegistrationProviderListOperationsDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(DomainRegistrationProviderListOperationsDefaultResponseError.to_json())

# convert the object into a dict
domain_registration_provider_list_operations_default_response_error_dict = domain_registration_provider_list_operations_default_response_error_instance.to_dict()
# create an instance of DomainRegistrationProviderListOperationsDefaultResponseError from a dict
domain_registration_provider_list_operations_default_response_error_from_dict = DomainRegistrationProviderListOperationsDefaultResponseError.from_dict(domain_registration_provider_list_operations_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


