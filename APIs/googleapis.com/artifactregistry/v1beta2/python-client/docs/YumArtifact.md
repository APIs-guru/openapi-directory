# YumArtifact

A detailed representation of a Yum artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | Output only. Operating system architecture of the artifact. | [optional] [readonly] 
**name** | **str** | Output only. The Artifact Registry resource name of the artifact. | [optional] [readonly] 
**package_name** | **str** | Output only. The yum package name of the artifact. | [optional] [readonly] 
**package_type** | **str** | Output only. An artifact is a binary or source package. | [optional] [readonly] 

## Example

```python
from openapi_client.models.yum_artifact import YumArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of YumArtifact from a JSON string
yum_artifact_instance = YumArtifact.from_json(json)
# print the JSON string representation of the object
print(YumArtifact.to_json())

# convert the object into a dict
yum_artifact_dict = yum_artifact_instance.to_dict()
# create an instance of YumArtifact from a dict
yum_artifact_from_dict = YumArtifact.from_dict(yum_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


