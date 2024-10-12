# VirtualNetworkLinkListResult

The response to a list virtual network link to Private DNS zone operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token for the next page of results. | [optional] [readonly] 
**value** | [**List[VirtualNetworkLink]**](VirtualNetworkLink.md) | Information about the virtual network links to the Private DNS zones. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_link_list_result import VirtualNetworkLinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkLinkListResult from a JSON string
virtual_network_link_list_result_instance = VirtualNetworkLinkListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkLinkListResult.to_json())

# convert the object into a dict
virtual_network_link_list_result_dict = virtual_network_link_list_result_instance.to_dict()
# create an instance of VirtualNetworkLinkListResult from a dict
virtual_network_link_list_result_from_dict = VirtualNetworkLinkListResult.from_dict(virtual_network_link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


