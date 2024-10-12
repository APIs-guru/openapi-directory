# SoftwareRecipeStep

An action that can be taken as part of installing or updating a recipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_extraction** | [**SoftwareRecipeStepExtractArchive**](SoftwareRecipeStepExtractArchive.md) |  | [optional] 
**dpkg_installation** | [**SoftwareRecipeStepInstallDpkg**](SoftwareRecipeStepInstallDpkg.md) |  | [optional] 
**file_copy** | [**SoftwareRecipeStepCopyFile**](SoftwareRecipeStepCopyFile.md) |  | [optional] 
**file_exec** | [**SoftwareRecipeStepExecFile**](SoftwareRecipeStepExecFile.md) |  | [optional] 
**msi_installation** | [**SoftwareRecipeStepInstallMsi**](SoftwareRecipeStepInstallMsi.md) |  | [optional] 
**rpm_installation** | [**SoftwareRecipeStepInstallRpm**](SoftwareRecipeStepInstallRpm.md) |  | [optional] 
**script_run** | [**SoftwareRecipeStepRunScript**](SoftwareRecipeStepRunScript.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step import SoftwareRecipeStep

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStep from a JSON string
software_recipe_step_instance = SoftwareRecipeStep.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStep.to_json())

# convert the object into a dict
software_recipe_step_dict = software_recipe_step_instance.to_dict()
# create an instance of SoftwareRecipeStep from a dict
software_recipe_step_from_dict = SoftwareRecipeStep.from_dict(software_recipe_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


