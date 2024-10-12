# IntegrationServiceEnvironmentProperties

The integration service environment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints_configuration** | [**FlowEndpointsConfiguration**](FlowEndpointsConfiguration.md) |  | [optional] 
**integration_service_environment_id** | **str** | Gets the tracking id. | [optional] 
**network_configuration** | [**NetworkConfiguration**](NetworkConfiguration.md) |  | [optional] 
**provisioning_state** | [**WorkflowProvisioningState**](WorkflowProvisioningState.md) |  | [optional] 
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_properties import IntegrationServiceEnvironmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentProperties from a JSON string
integration_service_environment_properties_instance = IntegrationServiceEnvironmentProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentProperties.to_json())

# convert the object into a dict
integration_service_environment_properties_dict = integration_service_environment_properties_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentProperties from a dict
integration_service_environment_properties_from_dict = IntegrationServiceEnvironmentProperties.from_dict(integration_service_environment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


