# VirtualNetworkProperties

Properties of a virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_state** | [**VirtualNetworkConfigurationState**](VirtualNetworkConfigurationState.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 
**tenant_resource_uri** | **str** | The tenant resource URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_properties import VirtualNetworkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkProperties from a JSON string
virtual_network_properties_instance = VirtualNetworkProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkProperties.to_json())

# convert the object into a dict
virtual_network_properties_dict = virtual_network_properties_instance.to_dict()
# create an instance of VirtualNetworkProperties from a dict
virtual_network_properties_from_dict = VirtualNetworkProperties.from_dict(virtual_network_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


