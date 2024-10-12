# AddRecoveryServicesProviderInputProperties

The properties of an add provider request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_identity_input** | [**IdentityProviderInput**](IdentityProviderInput.md) |  | 
**machine_name** | **str** | The name of the machine where the provider is getting added. | 
**resource_access_identity_input** | [**IdentityProviderInput**](IdentityProviderInput.md) |  | 

## Example

```python
from openapi_client.models.add_recovery_services_provider_input_properties import AddRecoveryServicesProviderInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddRecoveryServicesProviderInputProperties from a JSON string
add_recovery_services_provider_input_properties_instance = AddRecoveryServicesProviderInputProperties.from_json(json)
# print the JSON string representation of the object
print(AddRecoveryServicesProviderInputProperties.to_json())

# convert the object into a dict
add_recovery_services_provider_input_properties_dict = add_recovery_services_provider_input_properties_instance.to_dict()
# create an instance of AddRecoveryServicesProviderInputProperties from a dict
add_recovery_services_provider_input_properties_from_dict = AddRecoveryServicesProviderInputProperties.from_dict(add_recovery_services_provider_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


