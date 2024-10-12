# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet

Subnet in a virtual network resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnet.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


