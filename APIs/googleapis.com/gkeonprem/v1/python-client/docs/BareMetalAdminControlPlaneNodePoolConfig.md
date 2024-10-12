# BareMetalAdminControlPlaneNodePoolConfig

BareMetalAdminControlPlaneNodePoolConfig specifies the control plane node pool configuration. We have a control plane specific node pool config so that we can flexible about supporting control plane specific fields in the future.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_pool_config** | [**BareMetalNodePoolConfig**](BareMetalNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_control_plane_node_pool_config import BareMetalAdminControlPlaneNodePoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminControlPlaneNodePoolConfig from a JSON string
bare_metal_admin_control_plane_node_pool_config_instance = BareMetalAdminControlPlaneNodePoolConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminControlPlaneNodePoolConfig.to_json())

# convert the object into a dict
bare_metal_admin_control_plane_node_pool_config_dict = bare_metal_admin_control_plane_node_pool_config_instance.to_dict()
# create an instance of BareMetalAdminControlPlaneNodePoolConfig from a dict
bare_metal_admin_control_plane_node_pool_config_from_dict = BareMetalAdminControlPlaneNodePoolConfig.from_dict(bare_metal_admin_control_plane_node_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


