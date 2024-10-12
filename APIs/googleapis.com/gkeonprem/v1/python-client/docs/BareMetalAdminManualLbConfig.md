# BareMetalAdminManualLbConfig

BareMetalAdminManualLbConfig represents configuration parameters for a manual load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether manual load balancing is enabled. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_manual_lb_config import BareMetalAdminManualLbConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminManualLbConfig from a JSON string
bare_metal_admin_manual_lb_config_instance = BareMetalAdminManualLbConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminManualLbConfig.to_json())

# convert the object into a dict
bare_metal_admin_manual_lb_config_dict = bare_metal_admin_manual_lb_config_instance.to_dict()
# create an instance of BareMetalAdminManualLbConfig from a dict
bare_metal_admin_manual_lb_config_from_dict = BareMetalAdminManualLbConfig.from_dict(bare_metal_admin_manual_lb_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


