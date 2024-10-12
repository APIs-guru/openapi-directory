# PrivateLinkServiceIpConfigurationPropertiesSubnet

Subnet in a virtual network resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.private_link_service_ip_configuration_properties_subnet import PrivateLinkServiceIpConfigurationPropertiesSubnet

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceIpConfigurationPropertiesSubnet from a JSON string
private_link_service_ip_configuration_properties_subnet_instance = PrivateLinkServiceIpConfigurationPropertiesSubnet.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceIpConfigurationPropertiesSubnet.to_json())

# convert the object into a dict
private_link_service_ip_configuration_properties_subnet_dict = private_link_service_ip_configuration_properties_subnet_instance.to_dict()
# create an instance of PrivateLinkServiceIpConfigurationPropertiesSubnet from a dict
private_link_service_ip_configuration_properties_subnet_from_dict = PrivateLinkServiceIpConfigurationPropertiesSubnet.from_dict(private_link_service_ip_configuration_properties_subnet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


