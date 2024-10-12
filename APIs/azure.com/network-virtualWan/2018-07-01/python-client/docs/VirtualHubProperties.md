# VirtualHubProperties

Parameters for VirtualHub

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | Address-prefix for this VirtualHub. | [optional] 
**hub_virtual_network_connections** | [**List[HubVirtualNetworkConnection]**](HubVirtualNetworkConnection.md) | list of all vnet connections with this VirtualHub. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**virtual_wan** | [**GetVpnSitesConfigurationRequestVpnSitesInner**](GetVpnSitesConfigurationRequestVpnSitesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_hub_properties import VirtualHubProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubProperties from a JSON string
virtual_hub_properties_instance = VirtualHubProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualHubProperties.to_json())

# convert the object into a dict
virtual_hub_properties_dict = virtual_hub_properties_instance.to_dict()
# create an instance of VirtualHubProperties from a dict
virtual_hub_properties_from_dict = VirtualHubProperties.from_dict(virtual_hub_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


