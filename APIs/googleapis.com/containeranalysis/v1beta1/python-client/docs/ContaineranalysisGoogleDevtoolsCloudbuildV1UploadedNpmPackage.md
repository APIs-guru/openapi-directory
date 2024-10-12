# ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage

An npm package uploaded to Artifact Registry using the NpmPackage directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes**](ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.md) |  | [optional] 
**push_timing** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan**](ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan.md) |  | [optional] 
**uri** | **str** | URI of the uploaded npm package. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package import ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package_dict = containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage from a dict
containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage.from_dict(containeranalysis_google_devtools_cloudbuild_v1_uploaded_npm_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


