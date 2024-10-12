# PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration

Reference to another subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration import PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration from a JSON string
public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration_instance = PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration.to_json())

# convert the object into a dict
public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration_dict = public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration_instance.to_dict()
# create an instance of PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration from a dict
public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration_from_dict = PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration.from_dict(public_ip_prefix_properties_format_load_balancer_frontend_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


