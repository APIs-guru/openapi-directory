# VirtualNetworkProperties

Properties of a virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_subnets** | [**List[Subnet]**](Subnet.md) | The allowed subnets of the virtual network. | [optional] 
**created_date** | **datetime** | The creation date of the virtual network. | [optional] [readonly] 
**description** | **str** | The description of the virtual network. | [optional] 
**external_provider_resource_id** | **str** | The Microsoft.Network resource identifier of the virtual network. | [optional] 
**external_subnets** | [**List[ExternalSubnet]**](ExternalSubnet.md) | The external subnet properties. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**subnet_overrides** | [**List[SubnetOverride]**](SubnetOverride.md) | The subnet overrides of the virtual network. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 

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


