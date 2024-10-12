# VirtualNetworksList

Pageable list of virtual networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[VirtualNetwork]**](VirtualNetwork.md) | List of virtual networks for this page. | [optional] 

## Example

```python
from openapi_client.models.virtual_networks_list import VirtualNetworksList

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworksList from a JSON string
virtual_networks_list_instance = VirtualNetworksList.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworksList.to_json())

# convert the object into a dict
virtual_networks_list_dict = virtual_networks_list_instance.to_dict()
# create an instance of VirtualNetworksList from a dict
virtual_networks_list_from_dict = VirtualNetworksList.from_dict(virtual_networks_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


