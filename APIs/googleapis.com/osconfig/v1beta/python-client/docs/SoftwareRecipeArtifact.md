# SoftwareRecipeArtifact

Specifies a resource to be used in the recipe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_insecure** | **bool** | Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. | [optional] 
**gcs** | [**SoftwareRecipeArtifactGcs**](SoftwareRecipeArtifactGcs.md) |  | [optional] 
**id** | **str** | Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. | [optional] 
**remote** | [**SoftwareRecipeArtifactRemote**](SoftwareRecipeArtifactRemote.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_recipe_artifact import SoftwareRecipeArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeArtifact from a JSON string
software_recipe_artifact_instance = SoftwareRecipeArtifact.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeArtifact.to_json())

# convert the object into a dict
software_recipe_artifact_dict = software_recipe_artifact_instance.to_dict()
# create an instance of SoftwareRecipeArtifact from a dict
software_recipe_artifact_from_dict = SoftwareRecipeArtifact.from_dict(software_recipe_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


