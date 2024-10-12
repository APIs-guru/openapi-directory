# InMageDisableProtectionProviderSpecificInput

InMage disable protection provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replica_vm_deletion_status** | **str** | A value indicating whether the replica VM should be destroyed or retained. Values from Delete and Retain. | [optional] 

## Example

```python
from openapi_client.models.in_mage_disable_protection_provider_specific_input import InMageDisableProtectionProviderSpecificInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageDisableProtectionProviderSpecificInput from a JSON string
in_mage_disable_protection_provider_specific_input_instance = InMageDisableProtectionProviderSpecificInput.from_json(json)
# print the JSON string representation of the object
print(InMageDisableProtectionProviderSpecificInput.to_json())

# convert the object into a dict
in_mage_disable_protection_provider_specific_input_dict = in_mage_disable_protection_provider_specific_input_instance.to_dict()
# create an instance of InMageDisableProtectionProviderSpecificInput from a dict
in_mage_disable_protection_provider_specific_input_from_dict = InMageDisableProtectionProviderSpecificInput.from_dict(in_mage_disable_protection_provider_specific_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


