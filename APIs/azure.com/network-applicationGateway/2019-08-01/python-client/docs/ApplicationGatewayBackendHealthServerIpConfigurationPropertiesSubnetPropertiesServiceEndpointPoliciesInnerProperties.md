# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties

Service Endpoint Policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**resource_guid** | **str** | The resource GUID property of the service endpoint policy resource. | [optional] [readonly] 
**service_endpoint_policy_definitions** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInner.md) | A collection of service endpoint policy definitions of the service endpoint policy. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | A collection of references to subnets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


