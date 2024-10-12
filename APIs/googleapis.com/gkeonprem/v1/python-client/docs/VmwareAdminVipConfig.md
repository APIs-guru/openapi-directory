# VmwareAdminVipConfig

VmwareAdminVipConfig for VMware load balancer configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons_vip** | **str** | The VIP to configure the load balancer for add-ons. | [optional] 
**control_plane_vip** | **str** | The VIP which you previously set aside for the Kubernetes API of the admin cluster. | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_vip_config import VmwareAdminVipConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminVipConfig from a JSON string
vmware_admin_vip_config_instance = VmwareAdminVipConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminVipConfig.to_json())

# convert the object into a dict
vmware_admin_vip_config_dict = vmware_admin_vip_config_instance.to_dict()
# create an instance of VmwareAdminVipConfig from a dict
vmware_admin_vip_config_from_dict = VmwareAdminVipConfig.from_dict(vmware_admin_vip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


