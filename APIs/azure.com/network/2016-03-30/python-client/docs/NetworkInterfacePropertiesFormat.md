# NetworkInterfacePropertiesFormat

NetworkInterface properties. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**NetworkInterfaceDnsSettings**](NetworkInterfaceDnsSettings.md) |  | [optional] 
**enable_ip_forwarding** | **bool** | Gets or sets whether IPForwarding is enabled on the NIC | [optional] 
**ip_configurations** | [**List[NetworkInterfaceIPConfiguration]**](NetworkInterfaceIPConfiguration.md) | Gets or sets list of IPConfigurations of the NetworkInterface | [optional] 
**mac_address** | **str** | Gets the MAC Address of the network interface | [optional] 
**network_security_group** | [**NetworkSecurityGroup**](NetworkSecurityGroup.md) |  | [optional] 
**primary** | **bool** | Gets whether this is a primary NIC on a virtual machine | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource GUID property of the network interface resource | [optional] 
**virtual_machine** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_interface_properties_format import NetworkInterfacePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfacePropertiesFormat from a JSON string
network_interface_properties_format_instance = NetworkInterfacePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfacePropertiesFormat.to_json())

# convert the object into a dict
network_interface_properties_format_dict = network_interface_properties_format_instance.to_dict()
# create an instance of NetworkInterfacePropertiesFormat from a dict
network_interface_properties_format_from_dict = NetworkInterfacePropertiesFormat.from_dict(network_interface_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


