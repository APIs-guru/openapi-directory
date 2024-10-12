# ContaineranalysisGoogleDevtoolsCloudbuildV1Source

Location of the source in a supported storage service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_repository** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository**](ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository.md) |  | [optional] 
**git_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource.md) |  | [optional] 
**repo_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource.md) |  | [optional] 
**storage_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource.md) |  | [optional] 
**storage_source_manifest** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest**](ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest.md) |  | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_source import ContaineranalysisGoogleDevtoolsCloudbuildV1Source

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Source from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_source_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Source.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Source.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_source_dict = containeranalysis_google_devtools_cloudbuild_v1_source_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Source from a dict
containeranalysis_google_devtools_cloudbuild_v1_source_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Source.from_dict(containeranalysis_google_devtools_cloudbuild_v1_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


