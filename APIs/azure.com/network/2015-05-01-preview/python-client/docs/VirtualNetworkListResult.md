# VirtualNetworkListResult

Response for ListVirtualNetworks Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[VirtualNetwork]**](VirtualNetwork.md) | Gets list of VirtualNetworks in a resource group | [optional] 

## Example

```python
from openapi_client.models.virtual_network_list_result import VirtualNetworkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkListResult from a JSON string
virtual_network_list_result_instance = VirtualNetworkListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkListResult.to_json())

# convert the object into a dict
virtual_network_list_result_dict = virtual_network_list_result_instance.to_dict()
# create an instance of VirtualNetworkListResult from a dict
virtual_network_list_result_from_dict = VirtualNetworkListResult.from_dict(virtual_network_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


