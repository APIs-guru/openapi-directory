# BareMetalMultipleNetworkInterfacesConfig

Specifies the multiple networking interfaces cluster configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable multiple network interfaces for your pods. When set network_config.advanced_networking is automatically set to true. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_multiple_network_interfaces_config import BareMetalMultipleNetworkInterfacesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalMultipleNetworkInterfacesConfig from a JSON string
bare_metal_multiple_network_interfaces_config_instance = BareMetalMultipleNetworkInterfacesConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalMultipleNetworkInterfacesConfig.to_json())

# convert the object into a dict
bare_metal_multiple_network_interfaces_config_dict = bare_metal_multiple_network_interfaces_config_instance.to_dict()
# create an instance of BareMetalMultipleNetworkInterfacesConfig from a dict
bare_metal_multiple_network_interfaces_config_from_dict = BareMetalMultipleNetworkInterfacesConfig.from_dict(bare_metal_multiple_network_interfaces_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


