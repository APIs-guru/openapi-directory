# TargetArtifact

The artifacts produced by a target render operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location. | [optional] [readonly] 
**manifest_path** | **str** | Output only. File path of the rendered manifest relative to the URI. | [optional] [readonly] 
**phase_artifacts** | [**Dict[str, PhaseArtifact]**](PhaseArtifact.md) | Output only. Map from the phase ID to the phase artifacts for the &#x60;Target&#x60;. | [optional] [readonly] 
**skaffold_config_path** | **str** | Output only. File path of the resolved Skaffold configuration relative to the URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.target_artifact import TargetArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of TargetArtifact from a JSON string
target_artifact_instance = TargetArtifact.from_json(json)
# print the JSON string representation of the object
print(TargetArtifact.to_json())

# convert the object into a dict
target_artifact_dict = target_artifact_instance.to_dict()
# create an instance of TargetArtifact from a dict
target_artifact_from_dict = TargetArtifact.from_dict(target_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


