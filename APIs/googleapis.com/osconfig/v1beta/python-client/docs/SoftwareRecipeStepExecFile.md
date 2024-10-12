# SoftwareRecipeStepExecFile

Executes an artifact or local file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_exit_codes** | **List[int]** | Defaults to [0]. A list of possible return values that the program can return to indicate a success. | [optional] 
**args** | **List[str]** | Arguments to be passed to the provided executable. | [optional] 
**artifact_id** | **str** | The id of the relevant artifact in the recipe. | [optional] 
**local_path** | **str** | The absolute path of the file on the local filesystem. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_exec_file import SoftwareRecipeStepExecFile

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepExecFile from a JSON string
software_recipe_step_exec_file_instance = SoftwareRecipeStepExecFile.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepExecFile.to_json())

# convert the object into a dict
software_recipe_step_exec_file_dict = software_recipe_step_exec_file_instance.to_dict()
# create an instance of SoftwareRecipeStepExecFile from a dict
software_recipe_step_exec_file_from_dict = SoftwareRecipeStepExecFile.from_dict(software_recipe_step_exec_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


