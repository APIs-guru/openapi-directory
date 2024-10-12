# PublicIPPrefixPropertiesFormat

Public IP prefix properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_prefix** | **str** | The allocated Prefix | [optional] 
**ip_tags** | [**List[IpTag]**](IpTag.md) | The list of tags associated with the public IP prefix. | [optional] 
**load_balancer_frontend_ip_configuration** | [**PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration**](PublicIPPrefixPropertiesFormatLoadBalancerFrontendIpConfiguration.md) |  | [optional] 
**prefix_length** | **int** | The Length of the Public IP Prefix. | [optional] 
**provisioning_state** | **str** | The provisioning state of the Public IP prefix resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**public_ip_address_version** | **str** | The public IP address version. Possible values are: &#39;IPv4&#39; and &#39;IPv6&#39;. | [optional] 
**public_ip_addresses** | [**List[ReferencedPublicIpAddress]**](ReferencedPublicIpAddress.md) | The list of all referenced PublicIPAddresses | [optional] 
**resource_guid** | **str** | The resource GUID property of the public IP prefix resource. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefix_properties_format import PublicIPPrefixPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixPropertiesFormat from a JSON string
public_ip_prefix_properties_format_instance = PublicIPPrefixPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixPropertiesFormat.to_json())

# convert the object into a dict
public_ip_prefix_properties_format_dict = public_ip_prefix_properties_format_instance.to_dict()
# create an instance of PublicIPPrefixPropertiesFormat from a dict
public_ip_prefix_properties_format_from_dict = PublicIPPrefixPropertiesFormat.from_dict(public_ip_prefix_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


