# ManagedArtifact

The managed artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The managed artifact id. | 

## Example

```python
from openapi_client.models.managed_artifact import ManagedArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedArtifact from a JSON string
managed_artifact_instance = ManagedArtifact.from_json(json)
# print the JSON string representation of the object
print(ManagedArtifact.to_json())

# convert the object into a dict
managed_artifact_dict = managed_artifact_instance.to_dict()
# create an instance of ManagedArtifact from a dict
managed_artifact_from_dict = ManagedArtifact.from_dict(managed_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


