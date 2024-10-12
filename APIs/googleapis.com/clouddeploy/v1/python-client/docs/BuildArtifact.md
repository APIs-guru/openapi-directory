# BuildArtifact

Description of an a image to use during Skaffold rendering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | Image name in Skaffold configuration. | [optional] 
**tag** | **str** | Image tag to use. This will generally be the full path to an image, such as \&quot;gcr.io/my-project/busybox:1.2.3\&quot; or \&quot;gcr.io/my-project/busybox@sha256:abc123\&quot;. | [optional] 

## Example

```python
from openapi_client.models.build_artifact import BuildArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of BuildArtifact from a JSON string
build_artifact_instance = BuildArtifact.from_json(json)
# print the JSON string representation of the object
print(BuildArtifact.to_json())

# convert the object into a dict
build_artifact_dict = build_artifact_instance.to_dict()
# create an instance of BuildArtifact from a dict
build_artifact_from_dict = BuildArtifact.from_dict(build_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


