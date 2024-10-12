# BareMetalMetalLbConfig

Represents configuration parameters for a MetalLB load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_pools** | [**List[BareMetalLoadBalancerAddressPool]**](BareMetalLoadBalancerAddressPool.md) | Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. | [optional] 
**load_balancer_node_pool_config** | [**BareMetalLoadBalancerNodePoolConfig**](BareMetalLoadBalancerNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_metal_lb_config import BareMetalMetalLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalMetalLbConfig from a JSON string
bare_metal_metal_lb_config_instance = BareMetalMetalLbConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalMetalLbConfig.to_json())

# convert the object into a dict
bare_metal_metal_lb_config_dict = bare_metal_metal_lb_config_instance.to_dict()
# create an instance of BareMetalMetalLbConfig from a dict
bare_metal_metal_lb_config_from_dict = BareMetalMetalLbConfig.from_dict(bare_metal_metal_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


