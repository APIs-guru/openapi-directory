# NetworkInterfaceProperties

Properties of a network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_name** | **str** | The DNS name. | [optional] 
**private_ip_address** | **str** | The private IP address. | [optional] 
**public_ip_address** | **str** | The public IP address. | [optional] 
**public_ip_address_id** | **str** | The resource ID of the public IP address. | [optional] 
**rdp_authority** | **str** | The RdpAuthority property is a server DNS host name or IP address followed by the service port number for RDP (Remote Desktop Protocol). | [optional] 
**shared_public_ip_address_configuration** | [**SharedPublicIpAddressConfiguration**](SharedPublicIpAddressConfiguration.md) |  | [optional] 
**ssh_authority** | **str** | The SshAuthority property is a server DNS host name or IP address followed by the service port number for SSH. | [optional] 
**subnet_id** | **str** | The resource ID of the sub net. | [optional] 
**virtual_network_id** | **str** | The resource ID of the virtual network. | [optional] 

## Example

```python
from openapi_client.models.network_interface_properties import NetworkInterfaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceProperties from a JSON string
network_interface_properties_instance = NetworkInterfaceProperties.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceProperties.to_json())

# convert the object into a dict
network_interface_properties_dict = network_interface_properties_instance.to_dict()
# create an instance of NetworkInterfaceProperties from a dict
network_interface_properties_from_dict = NetworkInterfaceProperties.from_dict(network_interface_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


