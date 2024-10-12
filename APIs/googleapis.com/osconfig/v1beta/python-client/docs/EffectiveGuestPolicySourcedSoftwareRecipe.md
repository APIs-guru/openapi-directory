# EffectiveGuestPolicySourcedSoftwareRecipe

A guest policy recipe including its source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**software_recipe** | [**SoftwareRecipe**](SoftwareRecipe.md) |  | [optional] 
**source** | **str** | Name of the guest policy providing this config. | [optional] 

## Example

```python
from openapi_client.models.effective_guest_policy_sourced_software_recipe import EffectiveGuestPolicySourcedSoftwareRecipe

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveGuestPolicySourcedSoftwareRecipe from a JSON string
effective_guest_policy_sourced_software_recipe_instance = EffectiveGuestPolicySourcedSoftwareRecipe.from_json(json)
# print the JSON string representation of the object
print(EffectiveGuestPolicySourcedSoftwareRecipe.to_json())

# convert the object into a dict
effective_guest_policy_sourced_software_recipe_dict = effective_guest_policy_sourced_software_recipe_instance.to_dict()
# create an instance of EffectiveGuestPolicySourcedSoftwareRecipe from a dict
effective_guest_policy_sourced_software_recipe_from_dict = EffectiveGuestPolicySourcedSoftwareRecipe.from_dict(effective_guest_policy_sourced_software_recipe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


