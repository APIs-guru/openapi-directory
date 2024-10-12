# ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**Dict[str, ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes]**](ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.md) | Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that &#x60;FileHashes&#x60; will only be populated if &#x60;BuildOptions&#x60; has requested a &#x60;SourceProvenanceHash&#x60;. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (&#x60;.tar.gz&#x60;), the &#x60;FileHash&#x60; will be for the single path to that file. | [optional] [readonly] 
**resolved_connected_repository** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository**](ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository.md) |  | [optional] 
**resolved_git_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource.md) |  | [optional] 
**resolved_repo_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource.md) |  | [optional] 
**resolved_storage_source** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource**](ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource.md) |  | [optional] 
**resolved_storage_source_manifest** | [**ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest**](ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest.md) |  | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_source_provenance import ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_source_provenance_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_source_provenance_dict = containeranalysis_google_devtools_cloudbuild_v1_source_provenance_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance from a dict
containeranalysis_google_devtools_cloudbuild_v1_source_provenance_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance.from_dict(containeranalysis_google_devtools_cloudbuild_v1_source_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


