# SlsaRecipe

Steps taken to build the artifact. For a TaskRun, typically each container corresponds to one step in the recipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **Dict[str, object]** | Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were \&quot;make\&quot;, then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different. | [optional] 
**defined_in_material** | **str** | Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were \&quot;make\&quot;, then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn&#39;t come from a material, as zero is default unset value for int64. | [optional] 
**entry_point** | **str** | String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were \&quot;make\&quot;, then this would reference the directory in which to run make as well as which target to use. | [optional] 
**environment** | **Dict[str, object]** | Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different. | [optional] 
**type** | **str** | URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. | [optional] 

## Example

```python
from openapi_client.models.slsa_recipe import SlsaRecipe

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaRecipe from a JSON string
slsa_recipe_instance = SlsaRecipe.from_json(json)
# print the JSON string representation of the object
print(SlsaRecipe.to_json())

# convert the object into a dict
slsa_recipe_dict = slsa_recipe_instance.to_dict()
# create an instance of SlsaRecipe from a dict
slsa_recipe_from_dict = SlsaRecipe.from_dict(slsa_recipe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


