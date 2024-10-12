# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties

Properties of IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_ip_address** | **str** | The private IP address of the IP configuration. | [optional] 
**private_ip_allocation_method** | **str** | The private IP allocation method. Possible values are &#39;Static&#39; and &#39;Dynamic&#39;. | [optional] 
**provisioning_state** | **str** | Gets the provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address** | [**PublicIPAddress**](PublicIPAddress.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_ip_configurations_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


