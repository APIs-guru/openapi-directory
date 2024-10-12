# SourceProvenance

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**Dict[str, FileHashes]**](FileHashes.md) | Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that &#x60;FileHashes&#x60; will only be populated if &#x60;BuildOptions&#x60; has requested a &#x60;SourceProvenanceHash&#x60;. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (&#x60;.tar.gz&#x60;), the &#x60;FileHash&#x60; will be for the single path to that file. | [optional] [readonly] 
**resolved_repo_source** | [**RepoSource**](RepoSource.md) |  | [optional] 
**resolved_storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 
**resolved_storage_source_manifest** | [**StorageSourceManifest**](StorageSourceManifest.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_provenance import SourceProvenance

# TODO update the JSON string below
json = "{}"
# create an instance of SourceProvenance from a JSON string
source_provenance_instance = SourceProvenance.from_json(json)
# print the JSON string representation of the object
print(SourceProvenance.to_json())

# convert the object into a dict
source_provenance_dict = source_provenance_instance.to_dict()
# create an instance of SourceProvenance from a dict
source_provenance_from_dict = SourceProvenance.from_dict(source_provenance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


