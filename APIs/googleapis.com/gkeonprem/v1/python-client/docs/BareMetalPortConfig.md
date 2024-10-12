# BareMetalPortConfig

Specifies load balancer ports for the bare metal user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_plane_load_balancer_port** | **int** | The port that control plane hosted load balancers will listen on. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_port_config import BareMetalPortConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalPortConfig from a JSON string
bare_metal_port_config_instance = BareMetalPortConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalPortConfig.to_json())

# convert the object into a dict
bare_metal_port_config_dict = bare_metal_port_config_instance.to_dict()
# create an instance of BareMetalPortConfig from a dict
bare_metal_port_config_from_dict = BareMetalPortConfig.from_dict(bare_metal_port_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


