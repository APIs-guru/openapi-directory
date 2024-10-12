# AddRecoveryServicesProviderInput

Input required to add a provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AddRecoveryServicesProviderInputProperties**](AddRecoveryServicesProviderInputProperties.md) |  | 

## Example

```python
from openapi_client.models.add_recovery_services_provider_input import AddRecoveryServicesProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of AddRecoveryServicesProviderInput from a JSON string
add_recovery_services_provider_input_instance = AddRecoveryServicesProviderInput.from_json(json)
# print the JSON string representation of the object
print(AddRecoveryServicesProviderInput.to_json())

# convert the object into a dict
add_recovery_services_provider_input_dict = add_recovery_services_provider_input_instance.to_dict()
# create an instance of AddRecoveryServicesProviderInput from a dict
add_recovery_services_provider_input_from_dict = AddRecoveryServicesProviderInput.from_dict(add_recovery_services_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


