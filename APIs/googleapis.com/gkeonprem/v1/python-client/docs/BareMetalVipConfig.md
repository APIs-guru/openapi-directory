# BareMetalVipConfig

Specifies the VIP config for the bare metal load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_vip** | **str** | The VIP which you previously set aside for the Kubernetes API of this bare metal user cluster. | [optional] 
**ingress_vip** | **str** | The VIP which you previously set aside for ingress traffic into this bare metal user cluster. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_vip_config import BareMetalVipConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalVipConfig from a JSON string
bare_metal_vip_config_instance = BareMetalVipConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalVipConfig.to_json())

# convert the object into a dict
bare_metal_vip_config_dict = bare_metal_vip_config_instance.to_dict()
# create an instance of BareMetalVipConfig from a dict
bare_metal_vip_config_from_dict = BareMetalVipConfig.from_dict(bare_metal_vip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


