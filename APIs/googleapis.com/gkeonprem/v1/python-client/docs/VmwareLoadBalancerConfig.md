# VmwareLoadBalancerConfig

Specifies the locad balancer config for the VMware user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**f5_config** | [**VmwareF5BigIpConfig**](VmwareF5BigIpConfig.md) |  | [optional] 
**manual_lb_config** | [**VmwareManualLbConfig**](VmwareManualLbConfig.md) |  | [optional] 
**metal_lb_config** | [**VmwareMetalLbConfig**](VmwareMetalLbConfig.md) |  | [optional] 
**seesaw_config** | [**VmwareSeesawConfig**](VmwareSeesawConfig.md) |  | [optional] 
**vip_config** | [**VmwareVipConfig**](VmwareVipConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_load_balancer_config import VmwareLoadBalancerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareLoadBalancerConfig from a JSON string
vmware_load_balancer_config_instance = VmwareLoadBalancerConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareLoadBalancerConfig.to_json())

# convert the object into a dict
vmware_load_balancer_config_dict = vmware_load_balancer_config_instance.to_dict()
# create an instance of VmwareLoadBalancerConfig from a dict
vmware_load_balancer_config_from_dict = VmwareLoadBalancerConfig.from_dict(vmware_load_balancer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


