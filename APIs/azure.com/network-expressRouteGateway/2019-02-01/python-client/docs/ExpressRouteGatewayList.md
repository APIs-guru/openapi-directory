# ExpressRouteGatewayList

List of ExpressRoute gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExpressRouteGateway]**](ExpressRouteGateway.md) | List of ExpressRoute gateways. | [optional] 

## Example

```python
from openapi_client.models.express_route_gateway_list import ExpressRouteGatewayList

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteGatewayList from a JSON string
express_route_gateway_list_instance = ExpressRouteGatewayList.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteGatewayList.to_json())

# convert the object into a dict
express_route_gateway_list_dict = express_route_gateway_list_instance.to_dict()
# create an instance of ExpressRouteGatewayList from a dict
express_route_gateway_list_from_dict = ExpressRouteGatewayList.from_dict(express_route_gateway_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


