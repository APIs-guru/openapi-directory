# HubVirtualNetworkConnectionProperties

Parameters for HubVirtualNetworkConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_hub_to_remote_vnet_transit** | **bool** | VirtualHub to RemoteVnet transit to enabled or not. | [optional] 
**allow_remote_vnet_to_use_hub_vnet_gateways** | **bool** | Allow RemoteVnet to use Virtual Hub&#39;s gateways. | [optional] 
**enable_internet_security** | **bool** | Enable internet security. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**remote_virtual_network** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.hub_virtual_network_connection_properties import HubVirtualNetworkConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HubVirtualNetworkConnectionProperties from a JSON string
hub_virtual_network_connection_properties_instance = HubVirtualNetworkConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(HubVirtualNetworkConnectionProperties.to_json())

# convert the object into a dict
hub_virtual_network_connection_properties_dict = hub_virtual_network_connection_properties_instance.to_dict()
# create an instance of HubVirtualNetworkConnectionProperties from a dict
hub_virtual_network_connection_properties_from_dict = HubVirtualNetworkConnectionProperties.from_dict(hub_virtual_network_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


