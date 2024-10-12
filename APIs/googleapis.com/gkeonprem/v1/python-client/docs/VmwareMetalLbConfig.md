# VmwareMetalLbConfig

Represents configuration parameters for the MetalLB load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_pools** | [**List[VmwareAddressPool]**](VmwareAddressPool.md) | Required. AddressPools is a list of non-overlapping IP pools used by load balancer typed services. All addresses must be routable to load balancer nodes. IngressVIP must be included in the pools. | [optional] 

## Example

```python
from openapi_client.models.vmware_metal_lb_config import VmwareMetalLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareMetalLbConfig from a JSON string
vmware_metal_lb_config_instance = VmwareMetalLbConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareMetalLbConfig.to_json())

# convert the object into a dict
vmware_metal_lb_config_dict = vmware_metal_lb_config_instance.to_dict()
# create an instance of VmwareMetalLbConfig from a dict
vmware_metal_lb_config_from_dict = VmwareMetalLbConfig.from_dict(vmware_metal_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


