# Artifacts

Artifacts produced by a build that should be uploaded upon successful completion of all build steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | **List[str]** | A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account&#39;s credentials. The digests of the pushed images will be stored in the Build resource&#39;s results field. If any of the images fail to be pushed, the build is marked FAILURE. | [optional] 
**maven_artifacts** | [**List[MavenArtifact]**](MavenArtifact.md) | A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account&#39;s credentials. If any artifacts fail to be pushed, the build is marked FAILURE. | [optional] 
**objects** | [**ArtifactObjects**](ArtifactObjects.md) |  | [optional] 
**python_packages** | [**List[PythonPackage]**](PythonPackage.md) | A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. | [optional] 

## Example

```python
from openapi_client.models.artifacts import Artifacts

# TODO update the JSON string below
json = "{}"
# create an instance of Artifacts from a JSON string
artifacts_instance = Artifacts.from_json(json)
# print the JSON string representation of the object
print(Artifacts.to_json())

# convert the object into a dict
artifacts_dict = artifacts_instance.to_dict()
# create an instance of Artifacts from a dict
artifacts_from_dict = Artifacts.from_dict(artifacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


