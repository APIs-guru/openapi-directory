# VirtualNetworkPropertiesFragment

Properties of a virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_subnets** | [**List[SubnetFragment]**](SubnetFragment.md) | The allowed subnets of the virtual network. | [optional] 
**description** | **str** | The description of the virtual network. | [optional] 
**external_provider_resource_id** | **str** | The Microsoft.Network resource identifier of the virtual network. | [optional] 
**subnet_overrides** | [**List[SubnetOverrideFragment]**](SubnetOverrideFragment.md) | The subnet overrides of the virtual network. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_properties_fragment import VirtualNetworkPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkPropertiesFragment from a JSON string
virtual_network_properties_fragment_instance = VirtualNetworkPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkPropertiesFragment.to_json())

# convert the object into a dict
virtual_network_properties_fragment_dict = virtual_network_properties_fragment_instance.to_dict()
# create an instance of VirtualNetworkPropertiesFragment from a dict
virtual_network_properties_fragment_from_dict = VirtualNetworkPropertiesFragment.from_dict(virtual_network_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


