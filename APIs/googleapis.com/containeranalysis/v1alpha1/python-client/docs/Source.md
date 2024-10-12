# Source

Source describes the location of the source used for the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_contexts** | [**List[GoogleDevtoolsContaineranalysisV1alpha1SourceContext]**](GoogleDevtoolsContaineranalysisV1alpha1SourceContext.md) | If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. | [optional] 
**artifact_storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 
**context** | [**GoogleDevtoolsContaineranalysisV1alpha1SourceContext**](GoogleDevtoolsContaineranalysisV1alpha1SourceContext.md) |  | [optional] 
**file_hashes** | [**Dict[str, FileHashes]**](FileHashes.md) | Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. | [optional] 
**repo_source** | [**RepoSource**](RepoSource.md) |  | [optional] 
**storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


