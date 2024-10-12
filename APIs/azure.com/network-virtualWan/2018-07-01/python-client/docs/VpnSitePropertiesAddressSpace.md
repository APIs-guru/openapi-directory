# VpnSitePropertiesAddressSpace

AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | A list of address blocks reserved for this virtual network in CIDR notation. | [optional] 

## Example

```python
from openapi_client.models.vpn_site_properties_address_space import VpnSitePropertiesAddressSpace

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSitePropertiesAddressSpace from a JSON string
vpn_site_properties_address_space_instance = VpnSitePropertiesAddressSpace.from_json(json)
# print the JSON string representation of the object
print(VpnSitePropertiesAddressSpace.to_json())

# convert the object into a dict
vpn_site_properties_address_space_dict = vpn_site_properties_address_space_instance.to_dict()
# create an instance of VpnSitePropertiesAddressSpace from a dict
vpn_site_properties_address_space_from_dict = VpnSitePropertiesAddressSpace.from_dict(vpn_site_properties_address_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


