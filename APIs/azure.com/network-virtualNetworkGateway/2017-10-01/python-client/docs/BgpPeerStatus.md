# BgpPeerStatus

BGP peer status details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asn** | **int** | The autonomous system number of the remote BGP peer | [optional] [readonly] 
**connected_duration** | **str** | For how long the peering has been up | [optional] [readonly] 
**local_address** | **str** | The virtual network gateway&#39;s local address | [optional] [readonly] 
**messages_received** | **int** | The number of BGP messages received | [optional] [readonly] 
**messages_sent** | **int** | The number of BGP messages sent | [optional] [readonly] 
**neighbor** | **str** | The remote BGP peer | [optional] [readonly] 
**routes_received** | **int** | The number of routes learned from this peer | [optional] [readonly] 
**state** | **str** | The BGP peer state | [optional] [readonly] 

## Example

```python
from openapi_client.models.bgp_peer_status import BgpPeerStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BgpPeerStatus from a JSON string
bgp_peer_status_instance = BgpPeerStatus.from_json(json)
# print the JSON string representation of the object
print(BgpPeerStatus.to_json())

# convert the object into a dict
bgp_peer_status_dict = bgp_peer_status_instance.to_dict()
# create an instance of BgpPeerStatus from a dict
bgp_peer_status_from_dict = BgpPeerStatus.from_dict(bgp_peer_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


