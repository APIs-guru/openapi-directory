# VmwareVipConfig

Specifies the VIP config for the VMware user cluster load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_vip** | **str** | The VIP which you previously set aside for the Kubernetes API of this cluster. | [optional] 
**ingress_vip** | **str** | The VIP which you previously set aside for ingress traffic into this cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_vip_config import VmwareVipConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareVipConfig from a JSON string
vmware_vip_config_instance = VmwareVipConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareVipConfig.to_json())

# convert the object into a dict
vmware_vip_config_dict = vmware_vip_config_instance.to_dict()
# create an instance of VmwareVipConfig from a dict
vmware_vip_config_from_dict = VmwareVipConfig.from_dict(vmware_vip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


