# PrivateLinkServiceProperties

Properties of the private link service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alias of the private link service. | [optional] [readonly] 
**auto_approval** | [**ResourceSet**](ResourceSet.md) | The auto-approval list of the private link service. | [optional] 
**fqdns** | **List[str]** | The list of Fqdn. | [optional] 
**ip_configurations** | [**List[PrivateLinkServiceIpConfiguration]**](PrivateLinkServiceIpConfiguration.md) | An array of references to the private link service IP configuration. | [optional] 
**load_balancer_frontend_ip_configurations** | [**List[PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner]**](PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner.md) | An array of references to the load balancer IP configurations. | [optional] 
**network_interfaces** | [**List[PrivateLinkServicePropertiesNetworkInterfacesInner]**](PrivateLinkServicePropertiesNetworkInterfacesInner.md) | Gets an array of references to the network interfaces created for this private link service. | [optional] [readonly] 
**private_endpoint_connections** | [**List[PrivateEndpointConnection]**](PrivateEndpointConnection.md) | An array of list about connections to the private endpoint. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**visibility** | [**ResourceSet**](ResourceSet.md) | The visibility list of the private link service. | [optional] 

## Example

```python
from openapi_client.models.private_link_service_properties import PrivateLinkServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceProperties from a JSON string
private_link_service_properties_instance = PrivateLinkServiceProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceProperties.to_json())

# convert the object into a dict
private_link_service_properties_dict = private_link_service_properties_instance.to_dict()
# create an instance of PrivateLinkServiceProperties from a dict
private_link_service_properties_from_dict = PrivateLinkServiceProperties.from_dict(private_link_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


