# VirtualWanProperties

Parameters for VirtualWAN

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_branch_to_branch_traffic** | **bool** | True if branch to branch traffic is allowed. | [optional] 
**allow_vnet_to_vnet_traffic** | **bool** | True if Vnet to Vnet traffic is allowed. | [optional] 
**disable_vpn_encryption** | **bool** | Vpn encryption to be disabled or not. | [optional] 
**office365_local_breakout_category** | [**OfficeTrafficCategory**](OfficeTrafficCategory.md) |  | [optional] 
**p2_s_vpn_server_configurations** | [**List[P2SVpnServerConfiguration]**](P2SVpnServerConfiguration.md) | List of all P2SVpnServerConfigurations associated with the virtual wan. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**security_provider_name** | **str** | The Security Provider name. | [optional] 
**virtual_hubs** | [**List[HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork]**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) | List of VirtualHubs in the VirtualWAN. | [optional] [readonly] 
**vpn_sites** | [**List[HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork]**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) | List of VpnSites in the VirtualWAN. | [optional] [readonly] 

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


