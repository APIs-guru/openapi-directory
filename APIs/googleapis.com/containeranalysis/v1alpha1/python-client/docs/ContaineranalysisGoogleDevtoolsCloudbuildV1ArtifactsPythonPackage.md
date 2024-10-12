# ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage

Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paths** | **List[str]** | Path globs used to match files in the build&#39;s workspace. For Python/ Twine, this is usually &#x60;dist/*&#x60;, and sometimes additionally an &#x60;.asc&#x60; file. | [optional] 
**repository** | **str** | Artifact Registry repository, in the form \&quot;https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY\&quot; Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package import ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package_dict = containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage from a dict
containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage.from_dict(containeranalysis_google_devtools_cloudbuild_v1_artifacts_python_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


