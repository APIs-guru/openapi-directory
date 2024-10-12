# VmwareAdminAddonNodeConfig

VmwareAdminAddonNodeConfig contains add-on node configurations for VMware admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_resize_config** | [**VmwareAutoResizeConfig**](VmwareAutoResizeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.vmware_admin_addon_node_config import VmwareAdminAddonNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareAdminAddonNodeConfig from a JSON string
vmware_admin_addon_node_config_instance = VmwareAdminAddonNodeConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareAdminAddonNodeConfig.to_json())

# convert the object into a dict
vmware_admin_addon_node_config_dict = vmware_admin_addon_node_config_instance.to_dict()
# create an instance of VmwareAdminAddonNodeConfig from a dict
vmware_admin_addon_node_config_from_dict = VmwareAdminAddonNodeConfig.from_dict(vmware_admin_addon_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


