# Artifact

Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e. not for display in primary views of the resource but perhaps displayed or downloaded upon request. The ListArtifacts method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents. | [optional] 
**create_time** | **datetime** | Output only. Creation timestamp. | [optional] [readonly] 
**hash** | **str** | Output only. A SHA-256 hash of the artifact&#39;s contents. If the artifact is gzipped, this is the hash of the uncompressed artifact. | [optional] [readonly] 
**mime_type** | **str** | A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible \&quot;schema\&quot; parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with \&quot;+gzip\&quot;). | [optional] 
**name** | **str** | Resource name. | [optional] 
**size_bytes** | **int** | Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact. | [optional] [readonly] 
**update_time** | **datetime** | Output only. Last update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.artifact import Artifact

# TODO update the JSON string below
json = "{}"
# create an instance of Artifact from a JSON string
artifact_instance = Artifact.from_json(json)
# print the JSON string representation of the object
print(Artifact.to_json())

# convert the object into a dict
artifact_dict = artifact_instance.to_dict()
# create an instance of Artifact from a dict
artifact_from_dict = Artifact.from_dict(artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


