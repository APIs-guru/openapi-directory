# BareMetalControlPlaneNodePoolConfig

Specifies the control plane node pool configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_pool_config** | [**BareMetalNodePoolConfig**](BareMetalNodePoolConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_control_plane_node_pool_config import BareMetalControlPlaneNodePoolConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalControlPlaneNodePoolConfig from a JSON string
bare_metal_control_plane_node_pool_config_instance = BareMetalControlPlaneNodePoolConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalControlPlaneNodePoolConfig.to_json())

# convert the object into a dict
bare_metal_control_plane_node_pool_config_dict = bare_metal_control_plane_node_pool_config_instance.to_dict()
# create an instance of BareMetalControlPlaneNodePoolConfig from a dict
bare_metal_control_plane_node_pool_config_from_dict = BareMetalControlPlaneNodePoolConfig.from_dict(bare_metal_control_plane_node_pool_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


