# VirtualNetworkPeeringListResult

Response for ListSubnets Api service callRetrieves all subnet that belongs to a virtual network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[VirtualNetworkPeering]**](VirtualNetworkPeering.md) | Gets the peerings in a virtual network | [optional] 

## Example

```python
from openapi_client.models.virtual_network_peering_list_result import VirtualNetworkPeeringListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkPeeringListResult from a JSON string
virtual_network_peering_list_result_instance = VirtualNetworkPeeringListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkPeeringListResult.to_json())

# convert the object into a dict
virtual_network_peering_list_result_dict = virtual_network_peering_list_result_instance.to_dict()
# create an instance of VirtualNetworkPeeringListResult from a dict
virtual_network_peering_list_result_from_dict = VirtualNetworkPeeringListResult.from_dict(virtual_network_peering_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


