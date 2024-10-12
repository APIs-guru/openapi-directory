# BareMetalAdminLoadBalancerConfig

BareMetalAdminLoadBalancerConfig specifies the load balancer configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual_lb_config** | [**BareMetalAdminManualLbConfig**](BareMetalAdminManualLbConfig.md) |  | [optional] 
**port_config** | [**BareMetalAdminPortConfig**](BareMetalAdminPortConfig.md) |  | [optional] 
**vip_config** | [**BareMetalAdminVipConfig**](BareMetalAdminVipConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_load_balancer_config import BareMetalAdminLoadBalancerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminLoadBalancerConfig from a JSON string
bare_metal_admin_load_balancer_config_instance = BareMetalAdminLoadBalancerConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminLoadBalancerConfig.to_json())

# convert the object into a dict
bare_metal_admin_load_balancer_config_dict = bare_metal_admin_load_balancer_config_instance.to_dict()
# create an instance of BareMetalAdminLoadBalancerConfig from a dict
bare_metal_admin_load_balancer_config_from_dict = BareMetalAdminLoadBalancerConfig.from_dict(bare_metal_admin_load_balancer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


