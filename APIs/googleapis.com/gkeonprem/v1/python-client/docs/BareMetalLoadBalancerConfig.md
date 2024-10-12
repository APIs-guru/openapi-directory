# BareMetalLoadBalancerConfig

Specifies the load balancer configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_lb_config** | [**BareMetalBgpLbConfig**](BareMetalBgpLbConfig.md) |  | [optional] 
**manual_lb_config** | [**BareMetalManualLbConfig**](BareMetalManualLbConfig.md) |  | [optional] 
**metal_lb_config** | [**BareMetalMetalLbConfig**](BareMetalMetalLbConfig.md) |  | [optional] 
**port_config** | [**BareMetalPortConfig**](BareMetalPortConfig.md) |  | [optional] 
**vip_config** | [**BareMetalVipConfig**](BareMetalVipConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_load_balancer_config import BareMetalLoadBalancerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalLoadBalancerConfig from a JSON string
bare_metal_load_balancer_config_instance = BareMetalLoadBalancerConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalLoadBalancerConfig.to_json())

# convert the object into a dict
bare_metal_load_balancer_config_dict = bare_metal_load_balancer_config_instance.to_dict()
# create an instance of BareMetalLoadBalancerConfig from a dict
bare_metal_load_balancer_config_from_dict = BareMetalLoadBalancerConfig.from_dict(bare_metal_load_balancer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


