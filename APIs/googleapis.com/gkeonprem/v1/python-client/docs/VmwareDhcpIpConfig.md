# VmwareDhcpIpConfig

Represents the network configuration required for the VMware user clusters with DHCP IP configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | enabled is a flag to mark if DHCP IP allocation is used for VMware user clusters. | [optional] 

## Example

```python
from openapi_client.models.vmware_dhcp_ip_config import VmwareDhcpIpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareDhcpIpConfig from a JSON string
vmware_dhcp_ip_config_instance = VmwareDhcpIpConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareDhcpIpConfig.to_json())

# convert the object into a dict
vmware_dhcp_ip_config_dict = vmware_dhcp_ip_config_instance.to_dict()
# create an instance of VmwareDhcpIpConfig from a dict
vmware_dhcp_ip_config_from_dict = VmwareDhcpIpConfig.from_dict(vmware_dhcp_ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


