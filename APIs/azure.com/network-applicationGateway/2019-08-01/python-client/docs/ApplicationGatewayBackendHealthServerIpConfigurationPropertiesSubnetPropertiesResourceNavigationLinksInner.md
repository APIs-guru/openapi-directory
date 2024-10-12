# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner

ResourceNavigationLink resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**id** | **str** | Resource navigation link identifier. | [optional] [readonly] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_resource_navigation_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


