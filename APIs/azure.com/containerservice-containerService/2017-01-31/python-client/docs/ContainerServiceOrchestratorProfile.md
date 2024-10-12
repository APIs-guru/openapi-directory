# ContainerServiceOrchestratorProfile

Profile for the container service orchestrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orchestrator_type** | **str** | The orchestrator to use to manage container service cluster resources. Valid values are Swarm, DCOS, and Custom. | 

## Example

```python
from openapi_client.models.container_service_orchestrator_profile import ContainerServiceOrchestratorProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceOrchestratorProfile from a JSON string
container_service_orchestrator_profile_instance = ContainerServiceOrchestratorProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceOrchestratorProfile.to_json())

# convert the object into a dict
container_service_orchestrator_profile_dict = container_service_orchestrator_profile_instance.to_dict()
# create an instance of ContainerServiceOrchestratorProfile from a dict
container_service_orchestrator_profile_from_dict = ContainerServiceOrchestratorProfile.from_dict(container_service_orchestrator_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


