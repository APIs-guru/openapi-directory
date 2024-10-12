# GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Device uplink address. | [optional] 
**assignment_mode** | **str** | Indicates how the device uplink address is assigned. Available options are: static, dynamic. | [optional] 
**gateway** | **str** | Device uplink gateway address. | [optional] 
**protocol** | **str** | Type of address for the device uplink. Available options are: ipv4, ipv6. | [optional] 
**public** | [**GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInnerPublic**](GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInnerPublic.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner import GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner from a JSON string
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner_instance = GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner.to_json())

# convert the object into a dict
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner_dict = get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner from a dict
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner_from_dict = GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner.from_dict(get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_addresses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


