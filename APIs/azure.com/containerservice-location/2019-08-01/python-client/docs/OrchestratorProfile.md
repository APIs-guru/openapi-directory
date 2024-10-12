# OrchestratorProfile

Contains information about orchestrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_preview** | **bool** | Whether Kubernetes version is currently in preview. | [optional] 
**orchestrator_type** | **str** | Orchestrator type. | [optional] 
**orchestrator_version** | **str** | Orchestrator version (major, minor, patch). | 

## Example

```python
from openapi_client.models.orchestrator_profile import OrchestratorProfile

# TODO update the JSON string below
json = "{}"
# create an instance of OrchestratorProfile from a JSON string
orchestrator_profile_instance = OrchestratorProfile.from_json(json)
# print the JSON string representation of the object
print(OrchestratorProfile.to_json())

# convert the object into a dict
orchestrator_profile_dict = orchestrator_profile_instance.to_dict()
# create an instance of OrchestratorProfile from a dict
orchestrator_profile_from_dict = OrchestratorProfile.from_dict(orchestrator_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


