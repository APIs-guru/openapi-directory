# BareMetalAdminVipConfig

BareMetalAdminVipConfig for bare metal load balancer configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_vip** | **str** | The VIP which you previously set aside for the Kubernetes API of this bare metal admin cluster. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_vip_config import BareMetalAdminVipConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminVipConfig from a JSON string
bare_metal_admin_vip_config_instance = BareMetalAdminVipConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminVipConfig.to_json())

# convert the object into a dict
bare_metal_admin_vip_config_dict = bare_metal_admin_vip_config_instance.to_dict()
# create an instance of BareMetalAdminVipConfig from a dict
bare_metal_admin_vip_config_from_dict = BareMetalAdminVipConfig.from_dict(bare_metal_admin_vip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


