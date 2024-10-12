# PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner

Frontend IP address of the load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | **object** |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 

## Example

```python
from openapi_client.models.private_link_service_properties_load_balancer_frontend_ip_configurations_inner import PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner from a JSON string
private_link_service_properties_load_balancer_frontend_ip_configurations_inner_instance = PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner.to_json())

# convert the object into a dict
private_link_service_properties_load_balancer_frontend_ip_configurations_inner_dict = private_link_service_properties_load_balancer_frontend_ip_configurations_inner_instance.to_dict()
# create an instance of PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner from a dict
private_link_service_properties_load_balancer_frontend_ip_configurations_inner_from_dict = PrivateLinkServicePropertiesLoadBalancerFrontendIpConfigurationsInner.from_dict(private_link_service_properties_load_balancer_frontend_ip_configurations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


