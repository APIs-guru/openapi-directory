# VmwareAdminLoadBalancerConfig

VmwareAdminLoadBalancerConfig contains load balancer configuration for VMware admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**f5_config** | [**VmwareAdminF5BigIpConfig**](VmwareAdminF5BigIpConfig.md) |  | [optional] 
**manual_lb_config** | [**VmwareAdminManualLbConfig**](VmwareAdminManualLbConfig.md) |  | [optional] 
**metal_lb_config** | **object** | VmwareAdminMetalLbConfig represents configuration parameters for a MetalLB load balancer. For admin clusters, currently no configurations is needed. | [optional] 
**seesaw_config** | [**VmwareAdminSeesawConfig**](VmwareAdminSeesawConfig.md) |  | [optional] 
**vip_config** | [**VmwareAdminVipConfig**](VmwareAdminVipConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_load_balancer_config import VmwareAdminLoadBalancerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminLoadBalancerConfig from a JSON string
vmware_admin_load_balancer_config_instance = VmwareAdminLoadBalancerConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminLoadBalancerConfig.to_json())

# convert the object into a dict
vmware_admin_load_balancer_config_dict = vmware_admin_load_balancer_config_instance.to_dict()
# create an instance of VmwareAdminLoadBalancerConfig from a dict
vmware_admin_load_balancer_config_from_dict = VmwareAdminLoadBalancerConfig.from_dict(vmware_admin_load_balancer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


