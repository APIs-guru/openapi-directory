# ExpressRouteConnectionProperties

Properties of the ExpressRouteConnection subresource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_key** | **str** | Authorization key to establish the connection. | [optional] 
**express_route_circuit_peering** | [**ExpressRouteCircuitPeeringId**](ExpressRouteCircuitPeeringId.md) |  | 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**routing_weight** | **int** | The routing weight associated to the connection. | [optional] 

## Example

```python
from openapi_client.models.express_route_connection_properties import ExpressRouteConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteConnectionProperties from a JSON string
express_route_connection_properties_instance = ExpressRouteConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteConnectionProperties.to_json())

# convert the object into a dict
express_route_connection_properties_dict = express_route_connection_properties_instance.to_dict()
# create an instance of ExpressRouteConnectionProperties from a dict
express_route_connection_properties_from_dict = ExpressRouteConnectionProperties.from_dict(express_route_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


