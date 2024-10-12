# SoftwareRecipeArtifactGcs

Specifies an artifact available as a Google Cloud Storage object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Bucket of the Google Cloud Storage object. Given an example URL: &#x60;https://storage.googleapis.com/my-bucket/foo/bar#1234567&#x60; this value would be &#x60;my-bucket&#x60;. | [optional] 
**generation** | **str** | Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. &#x60;https://storage.googleapis.com/my-bucket/foo/bar#1234567&#x60; this value would be &#x60;1234567&#x60;. | [optional] 
**object** | **str** | Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: &#x60;https://storage.googleapis.com/my-bucket/foo/bar#1234567&#x60; this value would be &#x60;foo/bar&#x60;. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_artifact_gcs import SoftwareRecipeArtifactGcs

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeArtifactGcs from a JSON string
software_recipe_artifact_gcs_instance = SoftwareRecipeArtifactGcs.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeArtifactGcs.to_json())

# convert the object into a dict
software_recipe_artifact_gcs_dict = software_recipe_artifact_gcs_instance.to_dict()
# create an instance of SoftwareRecipeArtifactGcs from a dict
software_recipe_artifact_gcs_from_dict = SoftwareRecipeArtifactGcs.from_dict(software_recipe_artifact_gcs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


