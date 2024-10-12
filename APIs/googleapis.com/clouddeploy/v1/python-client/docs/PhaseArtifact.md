# PhaseArtifact

Contains the paths to the artifacts, relative to the URI, for a phase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_manifests_path** | **str** | Output only. File path of the directory of rendered job manifests relative to the URI. This is only set if it is applicable. | [optional] [readonly] 
**manifest_path** | **str** | Output only. File path of the rendered manifest relative to the URI. | [optional] [readonly] 
**skaffold_config_path** | **str** | Output only. File path of the resolved Skaffold configuration relative to the URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.phase_artifact import PhaseArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of PhaseArtifact from a JSON string
phase_artifact_instance = PhaseArtifact.from_json(json)
# print the JSON string representation of the object
print(PhaseArtifact.to_json())

# convert the object into a dict
phase_artifact_dict = phase_artifact_instance.to_dict()
# create an instance of PhaseArtifact from a dict
phase_artifact_from_dict = PhaseArtifact.from_dict(phase_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


