# HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork

Reference to another subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.hub_virtual_network_connection_properties_remote_virtual_network import HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork from a JSON string
hub_virtual_network_connection_properties_remote_virtual_network_instance = HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.to_json())

# convert the object into a dict
hub_virtual_network_connection_properties_remote_virtual_network_dict = hub_virtual_network_connection_properties_remote_virtual_network_instance.to_dict()
# create an instance of HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork from a dict
hub_virtual_network_connection_properties_remote_virtual_network_from_dict = HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.from_dict(hub_virtual_network_connection_properties_remote_virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


