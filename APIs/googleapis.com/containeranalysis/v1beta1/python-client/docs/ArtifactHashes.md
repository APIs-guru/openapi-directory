# ArtifactHashes

Defines a hash object for use in Materials and Products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_hashes import ArtifactHashes

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactHashes from a JSON string
artifact_hashes_instance = ArtifactHashes.from_json(json)
# print the JSON string representation of the object
print(ArtifactHashes.to_json())

# convert the object into a dict
artifact_hashes_dict = artifact_hashes_instance.to_dict()
# create an instance of ArtifactHashes from a dict
artifact_hashes_from_dict = ArtifactHashes.from_dict(artifact_hashes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


