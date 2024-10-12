# OrchestratorVersionProfile

The profile of an orchestrator and its available versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** | Installed by default if version is not specified. | [optional] 
**is_preview** | **bool** | Whether Kubernetes version is currently in preview. | [optional] 
**orchestrator_type** | **str** | Orchestrator type. | 
**orchestrator_version** | **str** | Orchestrator version (major, minor, patch). | 
**upgrades** | [**List[OrchestratorProfile]**](OrchestratorProfile.md) | The list of available upgrade versions. | [optional] 

## Example

```python
from openapi_client.models.orchestrator_version_profile import OrchestratorVersionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OrchestratorVersionProfile from a JSON string
orchestrator_version_profile_instance = OrchestratorVersionProfile.from_json(json)
# print the JSON string representation of the object
print(OrchestratorVersionProfile.to_json())

# convert the object into a dict
orchestrator_version_profile_dict = orchestrator_version_profile_instance.to_dict()
# create an instance of OrchestratorVersionProfile from a dict
orchestrator_version_profile_from_dict = OrchestratorVersionProfile.from_dict(orchestrator_version_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


