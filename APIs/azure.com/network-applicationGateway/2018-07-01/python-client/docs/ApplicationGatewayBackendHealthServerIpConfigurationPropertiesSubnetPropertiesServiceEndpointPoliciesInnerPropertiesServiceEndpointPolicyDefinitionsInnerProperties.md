# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties

Service Endpoint policy definition resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description for this rule. Restricted to 140 chars. | [optional] 
**provisioning_state** | **str** | The provisioning state of the service end point policy definition. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**service** | **str** | service endpoint name. | [optional] 
**service_resources** | **List[str]** | A list of service resources. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInnerPropertiesServiceEndpointPolicyDefinitionsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_endpoint_policies_inner_properties_service_endpoint_policy_definitions_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


