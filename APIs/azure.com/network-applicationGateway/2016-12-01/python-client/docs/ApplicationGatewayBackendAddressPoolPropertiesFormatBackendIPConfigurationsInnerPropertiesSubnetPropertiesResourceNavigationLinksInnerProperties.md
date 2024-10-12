# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties

Properties of ResourceNavigationLink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Link to the external resource | [optional] 
**linked_resource_type** | **str** | Resource type of the linked resource. | [optional] 
**provisioning_state** | **str** | Provisioning state of the ResourceNavigationLink resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInnerProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_resource_navigation_links_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


