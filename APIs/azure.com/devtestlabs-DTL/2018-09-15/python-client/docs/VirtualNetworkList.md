# VirtualNetworkList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[VirtualNetwork]**](VirtualNetwork.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_list import VirtualNetworkList

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkList from a JSON string
virtual_network_list_instance = VirtualNetworkList.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkList.to_json())

# convert the object into a dict
virtual_network_list_dict = virtual_network_list_instance.to_dict()
# create an instance of VirtualNetworkList from a dict
virtual_network_list_from_dict = VirtualNetworkList.from_dict(virtual_network_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


