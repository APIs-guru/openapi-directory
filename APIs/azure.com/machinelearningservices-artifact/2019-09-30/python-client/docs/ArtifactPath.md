# ArtifactPath

Details of an Artifact Path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | The path to the Artifact in a container. | 

## Example

```python
from openapi_client.models.artifact_path import ArtifactPath

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactPath from a JSON string
artifact_path_instance = ArtifactPath.from_json(json)
# print the JSON string representation of the object
print(ArtifactPath.to_json())

# convert the object into a dict
artifact_path_dict = artifact_path_instance.to_dict()
# create an instance of ArtifactPath from a dict
artifact_path_from_dict = ArtifactPath.from_dict(artifact_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


