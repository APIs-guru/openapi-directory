# VirtualNetworkConfiguration

Configuration of a virtual network to which API Management service is deployed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the virtual network. | [optional] 
**subnet_resource_id** | **str** | The name of the subnet Resource ID. This has format /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/{virtual network name}/subnets/{subnet name}. | [optional] 
**subnetname** | **str** | The name of the subnet. | [optional] [readonly] 
**vnetid** | **str** | The virtual network ID. This is typically a GUID. Expect a null GUID by default. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_configuration import VirtualNetworkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkConfiguration from a JSON string
virtual_network_configuration_instance = VirtualNetworkConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkConfiguration.to_json())

# convert the object into a dict
virtual_network_configuration_dict = virtual_network_configuration_instance.to_dict()
# create an instance of VirtualNetworkConfiguration from a dict
virtual_network_configuration_from_dict = VirtualNetworkConfiguration.from_dict(virtual_network_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


