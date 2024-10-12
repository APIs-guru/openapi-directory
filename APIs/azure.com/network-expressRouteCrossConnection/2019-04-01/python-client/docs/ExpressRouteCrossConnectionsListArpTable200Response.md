# ExpressRouteCrossConnectionsListArpTable200Response

Response for ListArpTable associated with the Express Route Circuits API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ExpressRouteCrossConnectionsListArpTable200ResponseValueInner]**](ExpressRouteCrossConnectionsListArpTable200ResponseValueInner.md) | Gets list of the ARP table. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connections_list_arp_table200_response import ExpressRouteCrossConnectionsListArpTable200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionsListArpTable200Response from a JSON string
express_route_cross_connections_list_arp_table200_response_instance = ExpressRouteCrossConnectionsListArpTable200Response.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionsListArpTable200Response.to_json())

# convert the object into a dict
express_route_cross_connections_list_arp_table200_response_dict = express_route_cross_connections_list_arp_table200_response_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionsListArpTable200Response from a dict
express_route_cross_connections_list_arp_table200_response_from_dict = ExpressRouteCrossConnectionsListArpTable200Response.from_dict(express_route_cross_connections_list_arp_table200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


