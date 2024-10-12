# BareMetalNetworkConfig

Specifies the cluster network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_networking** | **bool** | Enables the use of advanced Anthos networking features, such as Bundled Load Balancing with BGP or the egress NAT gateway. Setting configuration for advanced networking features will automatically set this flag. | [optional] 
**island_mode_cidr** | [**BareMetalIslandModeCidrConfig**](BareMetalIslandModeCidrConfig.md) |  | [optional] 
**multiple_network_interfaces_config** | [**BareMetalMultipleNetworkInterfacesConfig**](BareMetalMultipleNetworkInterfacesConfig.md) |  | [optional] 
**sr_iov_config** | [**BareMetalSrIovConfig**](BareMetalSrIovConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_network_config import BareMetalNetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNetworkConfig from a JSON string
bare_metal_network_config_instance = BareMetalNetworkConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalNetworkConfig.to_json())

# convert the object into a dict
bare_metal_network_config_dict = bare_metal_network_config_instance.to_dict()
# create an instance of BareMetalNetworkConfig from a dict
bare_metal_network_config_from_dict = BareMetalNetworkConfig.from_dict(bare_metal_network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


