# SoftwareRecipeArtifactRemote

Specifies an artifact available via some URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksum** | **str** | Must be provided if &#x60;allow_insecure&#x60; is &#x60;false&#x60;. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn&#39;t match the artifact then the recipe installation fails before running any of the steps. | [optional] 
**uri** | **str** | URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. | [optional] 

## Example

```python
from openapi_client.models.software_recipe_artifact_remote import SoftwareRecipeArtifactRemote

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareRecipeArtifactRemote from a JSON string
software_recipe_artifact_remote_instance = SoftwareRecipeArtifactRemote.from_json(json)
# print the JSON string representation of the object
print(SoftwareRecipeArtifactRemote.to_json())

# convert the object into a dict
software_recipe_artifact_remote_dict = software_recipe_artifact_remote_instance.to_dict()
# create an instance of SoftwareRecipeArtifactRemote from a dict
software_recipe_artifact_remote_from_dict = SoftwareRecipeArtifactRemote.from_dict(software_recipe_artifact_remote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


