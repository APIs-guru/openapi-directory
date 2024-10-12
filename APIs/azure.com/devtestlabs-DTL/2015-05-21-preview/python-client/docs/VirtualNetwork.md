# VirtualNetwork

A virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the resource. | [optional] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**properties** | [**VirtualNetworkProperties**](VirtualNetworkProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.virtual_network import VirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetwork from a JSON string
virtual_network_instance = VirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(VirtualNetwork.to_json())

# convert the object into a dict
virtual_network_dict = virtual_network_instance.to_dict()
# create an instance of VirtualNetwork from a dict
virtual_network_from_dict = VirtualNetwork.from_dict(virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


