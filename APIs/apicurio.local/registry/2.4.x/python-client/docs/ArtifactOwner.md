# ArtifactOwner

Describes the ownership of an artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_owner import ArtifactOwner

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactOwner from a JSON string
artifact_owner_instance = ArtifactOwner.from_json(json)
# print the JSON string representation of the object
print(ArtifactOwner.to_json())

# convert the object into a dict
artifact_owner_dict = artifact_owner_instance.to_dict()
# create an instance of ArtifactOwner from a dict
artifact_owner_from_dict = ArtifactOwner.from_dict(artifact_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


