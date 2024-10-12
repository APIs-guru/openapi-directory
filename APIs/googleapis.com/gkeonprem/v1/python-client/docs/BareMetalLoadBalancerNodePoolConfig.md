# BareMetalLoadBalancerNodePoolConfig

Specifies the load balancer's node pool configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_pool_config** | [**BareMetalNodePoolConfig**](BareMetalNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_load_balancer_node_pool_config import BareMetalLoadBalancerNodePoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalLoadBalancerNodePoolConfig from a JSON string
bare_metal_load_balancer_node_pool_config_instance = BareMetalLoadBalancerNodePoolConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalLoadBalancerNodePoolConfig.to_json())

# convert the object into a dict
bare_metal_load_balancer_node_pool_config_dict = bare_metal_load_balancer_node_pool_config_instance.to_dict()
# create an instance of BareMetalLoadBalancerNodePoolConfig from a dict
bare_metal_load_balancer_node_pool_config_from_dict = BareMetalLoadBalancerNodePoolConfig.from_dict(bare_metal_load_balancer_node_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


