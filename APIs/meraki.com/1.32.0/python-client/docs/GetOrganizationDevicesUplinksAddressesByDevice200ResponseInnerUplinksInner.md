# GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner]**](GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInnerAddressesInner.md) | Available addresses for the interface. | [optional] 
**interface** | **str** | Interface for the device uplink. Available options are: cellular, man1, man2, wan1, wan2 | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner import GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner from a JSON string
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_instance = GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner.to_json())

# convert the object into a dict
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_dict = get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_instance.to_dict()
# create an instance of GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner from a dict
get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_from_dict = GetOrganizationDevicesUplinksAddressesByDevice200ResponseInnerUplinksInner.from_dict(get_organization_devices_uplinks_addresses_by_device200_response_inner_uplinks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


