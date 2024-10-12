# EffectiveGuestPolicy

The effective guest policy that applies to a VM instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_repositories** | [**List[EffectiveGuestPolicySourcedPackageRepository]**](EffectiveGuestPolicySourcedPackageRepository.md) | List of package repository configurations assigned to the VM instance. | [optional] 
**packages** | [**List[EffectiveGuestPolicySourcedPackage]**](EffectiveGuestPolicySourcedPackage.md) | List of package configurations assigned to the VM instance. | [optional] 
**software_recipes** | [**List[EffectiveGuestPolicySourcedSoftwareRecipe]**](EffectiveGuestPolicySourcedSoftwareRecipe.md) | List of recipes assigned to the VM instance. | [optional] 

## Example

```python
from openapi_client.models.effective_guest_policy import EffectiveGuestPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveGuestPolicy from a JSON string
effective_guest_policy_instance = EffectiveGuestPolicy.from_json(json)
# print the JSON string representation of the object
print(EffectiveGuestPolicy.to_json())

# convert the object into a dict
effective_guest_policy_dict = effective_guest_policy_instance.to_dict()
# create an instance of EffectiveGuestPolicy from a dict
effective_guest_policy_from_dict = EffectiveGuestPolicy.from_dict(effective_guest_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


