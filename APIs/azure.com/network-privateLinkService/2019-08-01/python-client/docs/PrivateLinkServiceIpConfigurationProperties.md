# PrivateLinkServiceIpConfigurationProperties

Properties of private link service IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **bool** | Whether the ip configuration is primary or not. | [optional] 
**private_ip_address** | **str** | The private IP address of the IP configuration. | [optional] 
**private_ip_address_version** | **str** | IP address version. | [optional] 
**private_ip_allocation_method** | **str** | IP address allocation method. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**subnet** | [**PrivateLinkServiceIpConfigurationPropertiesSubnet**](PrivateLinkServiceIpConfigurationPropertiesSubnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_link_service_ip_configuration_properties import PrivateLinkServiceIpConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceIpConfigurationProperties from a JSON string
private_link_service_ip_configuration_properties_instance = PrivateLinkServiceIpConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceIpConfigurationProperties.to_json())

# convert the object into a dict
private_link_service_ip_configuration_properties_dict = private_link_service_ip_configuration_properties_instance.to_dict()
# create an instance of PrivateLinkServiceIpConfigurationProperties from a dict
private_link_service_ip_configuration_properties_from_dict = PrivateLinkServiceIpConfigurationProperties.from_dict(private_link_service_ip_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


