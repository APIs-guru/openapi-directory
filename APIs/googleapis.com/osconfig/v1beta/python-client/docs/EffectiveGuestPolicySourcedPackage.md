# EffectiveGuestPolicySourcedPackage

A guest policy package including its source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package** | [**Package**](Package.md) |  | [optional] 
**source** | **str** | Name of the guest policy providing this config. | [optional] 

## Example

```python
from openapi_client.models.effective_guest_policy_sourced_package import EffectiveGuestPolicySourcedPackage

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveGuestPolicySourcedPackage from a JSON string
effective_guest_policy_sourced_package_instance = EffectiveGuestPolicySourcedPackage.from_json(json)
# print the JSON string representation of the object
print(EffectiveGuestPolicySourcedPackage.to_json())

# convert the object into a dict
effective_guest_policy_sourced_package_dict = effective_guest_policy_sourced_package_instance.to_dict()
# create an instance of EffectiveGuestPolicySourcedPackage from a dict
effective_guest_policy_sourced_package_from_dict = EffectiveGuestPolicySourcedPackage.from_dict(effective_guest_policy_sourced_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


