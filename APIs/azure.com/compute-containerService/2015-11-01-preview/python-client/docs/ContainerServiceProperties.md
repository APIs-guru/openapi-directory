# ContainerServiceProperties

Properties of container service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_pool_profiles** | [**List[ContainerServiceAgentPoolProfile]**](ContainerServiceAgentPoolProfile.md) | Properties of agent pools | 
**diagnostics_profile** | [**ContainerServiceDiagnosticsProfile**](ContainerServiceDiagnosticsProfile.md) |  | [optional] 
**linux_profile** | [**ContainerServiceLinuxProfile**](ContainerServiceLinuxProfile.md) |  | 
**master_profile** | [**ContainerServiceMasterProfile**](ContainerServiceMasterProfile.md) |  | 
**orchestrator_profile** | [**ContainerServiceOrchestratorProfile**](ContainerServiceOrchestratorProfile.md) |  | [optional] 
**provisioning_state** | **str** | Gets the provisioning state, which only appears in the response. | [optional] [readonly] 
**windows_profile** | [**ContainerServiceWindowsProfile**](ContainerServiceWindowsProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_service_properties import ContainerServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceProperties from a JSON string
container_service_properties_instance = ContainerServiceProperties.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceProperties.to_json())

# convert the object into a dict
container_service_properties_dict = container_service_properties_instance.to_dict()
# create an instance of ContainerServiceProperties from a dict
container_service_properties_from_dict = ContainerServiceProperties.from_dict(container_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


