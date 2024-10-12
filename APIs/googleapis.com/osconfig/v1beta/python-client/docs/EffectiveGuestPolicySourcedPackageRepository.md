# EffectiveGuestPolicySourcedPackageRepository

A guest policy package repository including its source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_repository** | [**PackageRepository**](PackageRepository.md) |  | [optional] 
**source** | **str** | Name of the guest policy providing this config. | [optional] 

## Example

```python
from openapi_client.models.effective_guest_policy_sourced_package_repository import EffectiveGuestPolicySourcedPackageRepository

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveGuestPolicySourcedPackageRepository from a JSON string
effective_guest_policy_sourced_package_repository_instance = EffectiveGuestPolicySourcedPackageRepository.from_json(json)
# print the JSON string representation of the object
print(EffectiveGuestPolicySourcedPackageRepository.to_json())

# convert the object into a dict
effective_guest_policy_sourced_package_repository_dict = effective_guest_policy_sourced_package_repository_instance.to_dict()
# create an instance of EffectiveGuestPolicySourcedPackageRepository from a dict
effective_guest_policy_sourced_package_repository_from_dict = EffectiveGuestPolicySourcedPackageRepository.from_dict(effective_guest_policy_sourced_package_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


