# SoftwareRecipeStepInstallMsi

Installs an MSI file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_exit_codes** | **List[int]** | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] | [optional] 
**artifact_id** | **str** | Required. The id of the relevant artifact in the recipe. | [optional] 
**flags** | **List[str]** | The flags to use when installing the MSI defaults to [\&quot;/i\&quot;] (i.e. the install flag). | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_install_msi import SoftwareRecipeStepInstallMsi

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepInstallMsi from a JSON string
software_recipe_step_install_msi_instance = SoftwareRecipeStepInstallMsi.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepInstallMsi.to_json())

# convert the object into a dict
software_recipe_step_install_msi_dict = software_recipe_step_install_msi_instance.to_dict()
# create an instance of SoftwareRecipeStepInstallMsi from a dict
software_recipe_step_install_msi_from_dict = SoftwareRecipeStepInstallMsi.from_dict(software_recipe_step_install_msi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


