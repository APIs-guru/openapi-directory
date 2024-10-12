# BareMetalAdminPortConfig

BareMetalAdminPortConfig is the specification of load balancer ports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_load_balancer_port** | **int** | The port that control plane hosted load balancers will listen on. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_port_config import BareMetalAdminPortConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminPortConfig from a JSON string
bare_metal_admin_port_config_instance = BareMetalAdminPortConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminPortConfig.to_json())

# convert the object into a dict
bare_metal_admin_port_config_dict = bare_metal_admin_port_config_instance.to_dict()
# create an instance of BareMetalAdminPortConfig from a dict
bare_metal_admin_port_config_from_dict = BareMetalAdminPortConfig.from_dict(bare_metal_admin_port_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


