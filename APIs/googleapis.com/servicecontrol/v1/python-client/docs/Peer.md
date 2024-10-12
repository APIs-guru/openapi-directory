# Peer

This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | The IP address of the peer. | [optional] 
**labels** | **Dict[str, str]** | The labels associated with the peer. | [optional] 
**port** | **str** | The network port of the peer. | [optional] 
**principal** | **str** | The identity of this peer. Similar to &#x60;Request.auth.principal&#x60;, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. | [optional] 
**region_code** | **str** | The CLDR country/region code associated with the above IP address. If the IP address is private, the &#x60;region_code&#x60; should reflect the physical location where this peer is running. | [optional] 

## Example

```python
from openapi_client.models.peer import Peer

# TODO update the JSON string below
json = "{}"
# create an instance of Peer from a JSON string
peer_instance = Peer.from_json(json)
# print the JSON string representation of the object
print(Peer.to_json())

# convert the object into a dict
peer_dict = peer_instance.to_dict()
# create an instance of Peer from a dict
peer_from_dict = Peer.from_dict(peer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


