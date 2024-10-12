# SoftwareRecipeStepInstallDpkg

Installs a deb via dpkg.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Required. The id of the relevant artifact in the recipe. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_install_dpkg import SoftwareRecipeStepInstallDpkg

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepInstallDpkg from a JSON string
software_recipe_step_install_dpkg_instance = SoftwareRecipeStepInstallDpkg.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepInstallDpkg.to_json())

# convert the object into a dict
software_recipe_step_install_dpkg_dict = software_recipe_step_install_dpkg_instance.to_dict()
# create an instance of SoftwareRecipeStepInstallDpkg from a dict
software_recipe_step_install_dpkg_from_dict = SoftwareRecipeStepInstallDpkg.from_dict(software_recipe_step_install_dpkg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


