# VirtualNetworkFragment

A virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualNetworkPropertiesFragment**](VirtualNetworkPropertiesFragment.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_network_fragment import VirtualNetworkFragment

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkFragment from a JSON string
virtual_network_fragment_instance = VirtualNetworkFragment.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkFragment.to_json())

# convert the object into a dict
virtual_network_fragment_dict = virtual_network_fragment_instance.to_dict()
# create an instance of VirtualNetworkFragment from a dict
virtual_network_fragment_from_dict = VirtualNetworkFragment.from_dict(virtual_network_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


