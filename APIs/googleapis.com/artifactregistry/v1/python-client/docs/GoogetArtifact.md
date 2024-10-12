# GoogetArtifact

A detailed representation of a GooGet artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Output only. Operating system architecture of the artifact. | [optional] [readonly] 
**name** | **str** | Output only. The Artifact Registry resource name of the artifact. | [optional] [readonly] 
**package_name** | **str** | Output only. The GooGet package name of the artifact. | [optional] [readonly] 

## Example

```python
from openapi_client.models.googet_artifact import GoogetArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of GoogetArtifact from a JSON string
googet_artifact_instance = GoogetArtifact.from_json(json)
# print the JSON string representation of the object
print(GoogetArtifact.to_json())

# convert the object into a dict
googet_artifact_dict = googet_artifact_instance.to_dict()
# create an instance of GoogetArtifact from a dict
googet_artifact_from_dict = GoogetArtifact.from_dict(googet_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


