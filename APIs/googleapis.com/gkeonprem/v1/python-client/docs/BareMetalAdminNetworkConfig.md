# BareMetalAdminNetworkConfig

BareMetalAdminNetworkConfig specifies the cluster network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**island_mode_cidr** | [**BareMetalAdminIslandModeCidrConfig**](BareMetalAdminIslandModeCidrConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_network_config import BareMetalAdminNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminNetworkConfig from a JSON string
bare_metal_admin_network_config_instance = BareMetalAdminNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminNetworkConfig.to_json())

# convert the object into a dict
bare_metal_admin_network_config_dict = bare_metal_admin_network_config_instance.to_dict()
# create an instance of BareMetalAdminNetworkConfig from a dict
bare_metal_admin_network_config_from_dict = BareMetalAdminNetworkConfig.from_dict(bare_metal_admin_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


