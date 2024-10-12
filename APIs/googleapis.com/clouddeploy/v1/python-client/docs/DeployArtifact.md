# DeployArtifact

The artifacts produced by a deploy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | Output only. URI of a directory containing the artifacts. All paths are relative to this location. | [optional] [readonly] 
**manifest_paths** | **List[str]** | Output only. File paths of the manifests applied during the deploy operation relative to the URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deploy_artifact import DeployArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of DeployArtifact from a JSON string
deploy_artifact_instance = DeployArtifact.from_json(json)
# print the JSON string representation of the object
print(DeployArtifact.to_json())

# convert the object into a dict
deploy_artifact_dict = deploy_artifact_instance.to_dict()
# create an instance of DeployArtifact from a dict
deploy_artifact_from_dict = DeployArtifact.from_dict(deploy_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


