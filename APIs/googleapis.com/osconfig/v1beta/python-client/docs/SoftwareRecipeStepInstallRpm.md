# SoftwareRecipeStepInstallRpm

Installs an rpm file via the rpm utility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Required. The id of the relevant artifact in the recipe. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_install_rpm import SoftwareRecipeStepInstallRpm

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepInstallRpm from a JSON string
software_recipe_step_install_rpm_instance = SoftwareRecipeStepInstallRpm.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepInstallRpm.to_json())

# convert the object into a dict
software_recipe_step_install_rpm_dict = software_recipe_step_install_rpm_instance.to_dict()
# create an instance of SoftwareRecipeStepInstallRpm from a dict
software_recipe_step_install_rpm_from_dict = SoftwareRecipeStepInstallRpm.from_dict(software_recipe_step_install_rpm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


