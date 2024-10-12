# SwitchProtectionProviderSpecificInput

Provider specific switch protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the Instance type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.switch_protection_provider_specific_input import SwitchProtectionProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchProtectionProviderSpecificInput from a JSON string
switch_protection_provider_specific_input_instance = SwitchProtectionProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(SwitchProtectionProviderSpecificInput.to_json())

# convert the object into a dict
switch_protection_provider_specific_input_dict = switch_protection_provider_specific_input_instance.to_dict()
# create an instance of SwitchProtectionProviderSpecificInput from a dict
switch_protection_provider_specific_input_from_dict = SwitchProtectionProviderSpecificInput.from_dict(switch_protection_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


