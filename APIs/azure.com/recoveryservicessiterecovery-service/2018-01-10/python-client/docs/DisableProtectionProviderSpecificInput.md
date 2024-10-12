# DisableProtectionProviderSpecificInput

Disable protection provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.disable_protection_provider_specific_input import DisableProtectionProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of DisableProtectionProviderSpecificInput from a JSON string
disable_protection_provider_specific_input_instance = DisableProtectionProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(DisableProtectionProviderSpecificInput.to_json())

# convert the object into a dict
disable_protection_provider_specific_input_dict = disable_protection_provider_specific_input_instance.to_dict()
# create an instance of DisableProtectionProviderSpecificInput from a dict
disable_protection_provider_specific_input_from_dict = DisableProtectionProviderSpecificInput.from_dict(disable_protection_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


