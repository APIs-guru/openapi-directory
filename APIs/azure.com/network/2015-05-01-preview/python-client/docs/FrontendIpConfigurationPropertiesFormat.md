# FrontendIpConfigurationPropertiesFormat

Properties of Frontend IP Configuration of the load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_nat_pools** | [**List[SubResource]**](SubResource.md) | Read only.Inbound pools URIs that use this frontend IP | [optional] 
**inbound_nat_rules** | [**List[SubResource]**](SubResource.md) | Read only.Inbound rules URIs that use this frontend IP | [optional] 
**load_balancing_rules** | [**List[SubResource]**](SubResource.md) | Gets Load Balancing rules URIs that use this frontend IP | [optional] 
**outbound_nat_rules** | [**List[SubResource]**](SubResource.md) | Read only.Outbound rules URIs that use this frontend IP | [optional] 
**private_ip_address** | **str** | Gets or sets the IP address of the Load Balancer.This is only specified if a specific private IP address shall be allocated from the subnet specified in subnetRef | [optional] 
**private_ip_allocation_method** | **str** | Gets or sets PrivateIP allocation method (Static/Dynamic) | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**public_ip_address** | [**SubResource**](SubResource.md) |  | [optional] 
**subnet** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.frontend_ip_configuration_properties_format import FrontendIpConfigurationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of FrontendIpConfigurationPropertiesFormat from a JSON string
frontend_ip_configuration_properties_format_instance = FrontendIpConfigurationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(FrontendIpConfigurationPropertiesFormat.to_json())

# convert the object into a dict
frontend_ip_configuration_properties_format_dict = frontend_ip_configuration_properties_format_instance.to_dict()
# create an instance of FrontendIpConfigurationPropertiesFormat from a dict
frontend_ip_configuration_properties_format_from_dict = FrontendIpConfigurationPropertiesFormat.from_dict(frontend_ip_configuration_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


