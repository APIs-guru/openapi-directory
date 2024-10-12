# SoftwareRecipeStepRunScript

Runs a script through an interpreter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_exit_codes** | **List[int]** | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] | [optional] 
**interpreter** | **str** | The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\\(Unix\\)). | [optional] 
**script** | **str** | Required. The shell script to be executed. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_run_script import SoftwareRecipeStepRunScript

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepRunScript from a JSON string
software_recipe_step_run_script_instance = SoftwareRecipeStepRunScript.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepRunScript.to_json())

# convert the object into a dict
software_recipe_step_run_script_dict = software_recipe_step_run_script_instance.to_dict()
# create an instance of SoftwareRecipeStepRunScript from a dict
software_recipe_step_run_script_from_dict = SoftwareRecipeStepRunScript.from_dict(software_recipe_step_run_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


