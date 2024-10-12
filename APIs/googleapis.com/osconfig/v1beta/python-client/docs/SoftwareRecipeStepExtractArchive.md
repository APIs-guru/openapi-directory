# SoftwareRecipeStepExtractArchive

Extracts an archive of the type specified in the specified directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | Required. The id of the relevant artifact in the recipe. | [optional] 
**destination** | **str** | Directory to extract archive to. Defaults to &#x60;/&#x60; on Linux or &#x60;C:\\&#x60; on Windows. | [optional] 
**type** | **str** | Required. The type of the archive to extract. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_step_extract_archive import SoftwareRecipeStepExtractArchive

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeStepExtractArchive from a JSON string
software_recipe_step_extract_archive_instance = SoftwareRecipeStepExtractArchive.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeStepExtractArchive.to_json())

# convert the object into a dict
software_recipe_step_extract_archive_dict = software_recipe_step_extract_archive_instance.to_dict()
# create an instance of SoftwareRecipeStepExtractArchive from a dict
software_recipe_step_extract_archive_from_dict = SoftwareRecipeStepExtractArchive.from_dict(software_recipe_step_extract_archive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


