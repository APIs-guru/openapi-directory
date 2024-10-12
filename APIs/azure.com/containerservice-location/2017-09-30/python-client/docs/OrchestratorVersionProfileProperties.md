# OrchestratorVersionProfileProperties

The properties of an orchestrator version profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orchestrators** | [**List[OrchestratorVersionProfile]**](OrchestratorVersionProfile.md) | List of orchestrator version profiles. | 

## Example

```python
from openapi_client.models.orchestrator_version_profile_properties import OrchestratorVersionProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OrchestratorVersionProfileProperties from a JSON string
orchestrator_version_profile_properties_instance = OrchestratorVersionProfileProperties.from_json(json)
# print the JSON string representation of the object
print(OrchestratorVersionProfileProperties.to_json())

# convert the object into a dict
orchestrator_version_profile_properties_dict = orchestrator_version_profile_properties_instance.to_dict()
# create an instance of OrchestratorVersionProfileProperties from a dict
orchestrator_version_profile_properties_from_dict = OrchestratorVersionProfileProperties.from_dict(orchestrator_version_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


