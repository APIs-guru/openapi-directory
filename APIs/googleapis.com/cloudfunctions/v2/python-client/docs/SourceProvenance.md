# SourceProvenance

Provenance of the source. Ways to find the original source, or verify that some source was used for this build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_uri** | **str** | A copy of the build&#39;s &#x60;source.git_uri&#x60;, if exists, with any commits resolved. | [optional] 
**resolved_repo_source** | [**RepoSource**](RepoSource.md) |  | [optional] 
**resolved_storage_source** | [**StorageSource**](StorageSource.md) |  | [optional] 

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


