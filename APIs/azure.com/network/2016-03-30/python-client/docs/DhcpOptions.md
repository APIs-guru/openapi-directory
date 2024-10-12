# DhcpOptions

DHCPOptions contains an array of DNS servers available to VMs deployed in the virtual networkStandard DHCP option for a subnet overrides VNET DHCP options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_servers** | **List[str]** | Gets or sets list of DNS servers IP addresses | [optional] 

## Example

```python
from openapi_client.models.dhcp_options import DhcpOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DhcpOptions from a JSON string
dhcp_options_instance = DhcpOptions.from_json(json)
# print the JSON string representation of the object
print(DhcpOptions.to_json())

# convert the object into a dict
dhcp_options_dict = dhcp_options_instance.to_dict()
# create an instance of DhcpOptions from a dict
dhcp_options_from_dict = DhcpOptions.from_dict(dhcp_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


