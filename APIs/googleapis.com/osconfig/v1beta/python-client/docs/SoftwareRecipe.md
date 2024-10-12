# SoftwareRecipe

A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[SoftwareRecipeArtifact]**](SoftwareRecipeArtifact.md) | Resources available to be used in the steps in the recipe. | [optional] 
**desired_state** | **str** | Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won&#39;t be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. | [optional] 
**install_steps** | [**List[SoftwareRecipeStep]**](SoftwareRecipeStep.md) | Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back. | [optional] 
**name** | **str** | Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. | [optional] 
**update_steps** | [**List[SoftwareRecipeStep]**](SoftwareRecipeStep.md) | Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back. | [optional] 
**version** | **str** | The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). | [optional] 

## Example

```python
from openapi_client.models.software_recipe import SoftwareRecipe

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipe from a JSON string
software_recipe_instance = SoftwareRecipe.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipe.to_json())

# convert the object into a dict
software_recipe_dict = software_recipe_instance.to_dict()
# create an instance of SoftwareRecipe from a dict
software_recipe_from_dict = SoftwareRecipe.from_dict(software_recipe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


