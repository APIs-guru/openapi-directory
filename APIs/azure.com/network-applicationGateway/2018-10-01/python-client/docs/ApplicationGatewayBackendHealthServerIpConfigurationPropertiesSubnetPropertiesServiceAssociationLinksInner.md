# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner

ServiceAssociationLink resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


