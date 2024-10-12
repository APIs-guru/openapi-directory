# LinkedVpnTunnels

A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_to_site_data_transfer** | **bool** | A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). | [optional] 
**uris** | **List[str]** | The URIs of linked VPN tunnel resources. | [optional] 
**vpc_network** | **str** | Output only. The VPC network where these VPN tunnels are located. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_vpn_tunnels import LinkedVpnTunnels

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedVpnTunnels from a JSON string
linked_vpn_tunnels_instance = LinkedVpnTunnels.from_json(json)
# print the JSON string representation of the object
print(LinkedVpnTunnels.to_json())

# convert the object into a dict
linked_vpn_tunnels_dict = linked_vpn_tunnels_instance.to_dict()
# create an instance of LinkedVpnTunnels from a dict
linked_vpn_tunnels_from_dict = LinkedVpnTunnels.from_dict(linked_vpn_tunnels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


