# ContainerServiceOrchestratorProfile

Profile for Orchestrator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orchestrator_type** | **str** | Specifies what orchestrator will be used to manage container cluster resources. | [optional] 

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


