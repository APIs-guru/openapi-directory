# SoftwareRecipeStepCopyFile

Copies the artifact to the specified path on the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Required. The id of the relevant artifact in the recipe. | [optional] 
**destination** | **str** | Required. The absolute path on the instance to put the file. | [optional] 
**overwrite** | **bool** | Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. | [optional] 
**permissions** | **str** | Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_copy_file import SoftwareRecipeStepCopyFile

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepCopyFile from a JSON string
software_recipe_step_copy_file_instance = SoftwareRecipeStepCopyFile.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepCopyFile.to_json())

# convert the object into a dict
software_recipe_step_copy_file_dict = software_recipe_step_copy_file_instance.to_dict()
# create an instance of SoftwareRecipeStepCopyFile from a dict
software_recipe_step_copy_file_from_dict = SoftwareRecipeStepCopyFile.from_dict(software_recipe_step_copy_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


