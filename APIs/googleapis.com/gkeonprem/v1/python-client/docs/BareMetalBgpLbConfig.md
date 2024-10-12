# BareMetalBgpLbConfig

BareMetalBgpLbConfig represents configuration parameters for a Border Gateway Protocol (BGP) load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_pools** | [**List[BareMetalLoadBalancerAddressPool]**](BareMetalLoadBalancerAddressPool.md) | Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. | [optional] 
**asn** | **str** | Required. BGP autonomous system number (ASN) of the cluster. This field can be updated after cluster creation. | [optional] 
**bgp_peer_configs** | [**List[BareMetalBgpPeerConfig]**](BareMetalBgpPeerConfig.md) | Required. The list of BGP peers that the cluster will connect to. At least one peer must be configured for each control plane node. Control plane nodes will connect to these peers to advertise the control plane VIP. The Services load balancer also uses these peers by default. This field can be updated after cluster creation. | [optional] 
**load_balancer_node_pool_config** | [**BareMetalLoadBalancerNodePoolConfig**](BareMetalLoadBalancerNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_bgp_lb_config import BareMetalBgpLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalBgpLbConfig from a JSON string
bare_metal_bgp_lb_config_instance = BareMetalBgpLbConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalBgpLbConfig.to_json())

# convert the object into a dict
bare_metal_bgp_lb_config_dict = bare_metal_bgp_lb_config_instance.to_dict()
# create an instance of BareMetalBgpLbConfig from a dict
bare_metal_bgp_lb_config_from_dict = BareMetalBgpLbConfig.from_dict(bare_metal_bgp_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


