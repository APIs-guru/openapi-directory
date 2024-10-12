# PeerExpressRouteCircuitConnectionListResult

Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[PeerExpressRouteCircuitConnection]**](PeerExpressRouteCircuitConnection.md) | The global reach peer circuit connection associated with Private Peering in an ExpressRoute Circuit. | [optional] 

## Example

```python
from openapi_client.models.peer_express_route_circuit_connection_list_result import PeerExpressRouteCircuitConnectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeerExpressRouteCircuitConnectionListResult from a JSON string
peer_express_route_circuit_connection_list_result_instance = PeerExpressRouteCircuitConnectionListResult.from_json(json)
# print the JSON string representation of the object
print(PeerExpressRouteCircuitConnectionListResult.to_json())

# convert the object into a dict
peer_express_route_circuit_connection_list_result_dict = peer_express_route_circuit_connection_list_result_instance.to_dict()
# create an instance of PeerExpressRouteCircuitConnectionListResult from a dict
peer_express_route_circuit_connection_list_result_from_dict = PeerExpressRouteCircuitConnectionListResult.from_dict(peer_express_route_circuit_connection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


