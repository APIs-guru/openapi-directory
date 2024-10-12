# EnableProtectionProviderSpecificInput

Enable protection provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.enable_protection_provider_specific_input import EnableProtectionProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of EnableProtectionProviderSpecificInput from a JSON string
enable_protection_provider_specific_input_instance = EnableProtectionProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(EnableProtectionProviderSpecificInput.to_json())

# convert the object into a dict
enable_protection_provider_specific_input_dict = enable_protection_provider_specific_input_instance.to_dict()
# create an instance of EnableProtectionProviderSpecificInput from a dict
enable_protection_provider_specific_input_from_dict = EnableProtectionProviderSpecificInput.from_dict(enable_protection_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


