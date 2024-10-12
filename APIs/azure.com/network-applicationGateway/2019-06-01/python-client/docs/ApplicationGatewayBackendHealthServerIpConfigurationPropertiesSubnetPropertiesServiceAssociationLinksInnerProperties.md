# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties

Properties of ServiceAssociationLink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_delete** | **bool** | If true, the resource can be deleted. | [optional] 
**link** | **str** | Link to the external resource. | [optional] 
**linked_resource_type** | **str** | Resource type of the linked resource. | [optional] 
**locations** | **List[str]** | A list of locations. | [optional] 
**provisioning_state** | **str** | Provisioning state of the ServiceAssociationLink resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_service_association_links_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


