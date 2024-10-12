# BareMetalBgpPeerConfig

BareMetalBgpPeerConfig represents configuration parameters for a Border Gateway Protocol (BGP) peer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **str** | Required. BGP autonomous system number (ASN) for the network that contains the external peer device. | [optional] 
**control_plane_nodes** | **List[str]** | The IP address of the control plane node that connects to the external peer. If you don&#39;t specify any control plane nodes, all control plane nodes can connect to the external peer. If you specify one or more IP addresses, only the nodes specified participate in peering sessions. | [optional] 
**ip_address** | **str** | Required. The IP address of the external peer device. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_bgp_peer_config import BareMetalBgpPeerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalBgpPeerConfig from a JSON string
bare_metal_bgp_peer_config_instance = BareMetalBgpPeerConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalBgpPeerConfig.to_json())

# convert the object into a dict
bare_metal_bgp_peer_config_dict = bare_metal_bgp_peer_config_instance.to_dict()
# create an instance of BareMetalBgpPeerConfig from a dict
bare_metal_bgp_peer_config_from_dict = BareMetalBgpPeerConfig.from_dict(bare_metal_bgp_peer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


