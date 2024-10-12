# ArtifactPathList

Contains list of Artifact Paths.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paths** | [**List[ArtifactPath]**](ArtifactPath.md) | List of Artifact Paths. | 

## Example

```python
from openapi_client.models.artifact_path_list import ArtifactPathList

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactPathList from a JSON string
artifact_path_list_instance = ArtifactPathList.from_json(json)
# print the JSON string representation of the object
print(ArtifactPathList.to_json())

# convert the object into a dict
artifact_path_list_dict = artifact_path_list_instance.to_dict()
# create an instance of ArtifactPathList from a dict
artifact_path_list_from_dict = ArtifactPathList.from_dict(artifact_path_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


