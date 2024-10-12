# ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage

Npm package to upload to Artifact Registry upon successful completion of all build steps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_path** | **str** | Path to the package.json. e.g. workspace/path/to/package | [optional] 
**repository** | **str** | Artifact Registry repository, in the form \&quot;https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY\&quot; Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package import ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package_dict = containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage from a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage.from_dict(containeranalysis_google_devtools_cloudbuild_v1_artifacts_npm_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


