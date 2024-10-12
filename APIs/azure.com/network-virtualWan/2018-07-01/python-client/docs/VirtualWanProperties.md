# VirtualWanProperties

Parameters for VirtualWAN

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_vpn_encryption** | **bool** | Vpn encryption to be disabled or not. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**virtual_hubs** | [**List[GetVpnSitesConfigurationRequestVpnSitesInner]**](GetVpnSitesConfigurationRequestVpnSitesInner.md) | List of VirtualHubs in the VirtualWAN. | [optional] [readonly] 
**vpn_sites** | [**List[GetVpnSitesConfigurationRequestVpnSitesInner]**](GetVpnSitesConfigurationRequestVpnSitesInner.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_wan_properties import VirtualWanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualWanProperties from a JSON string
virtual_wan_properties_instance = VirtualWanProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualWanProperties.to_json())

# convert the object into a dict
virtual_wan_properties_dict = virtual_wan_properties_instance.to_dict()
# create an instance of VirtualWanProperties from a dict
virtual_wan_properties_from_dict = VirtualWanProperties.from_dict(virtual_wan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


