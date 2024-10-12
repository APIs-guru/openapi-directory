# GatewayRouteListResult

List of virtual network gateway routes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[GatewayRoute]**](GatewayRoute.md) | List of gateway routes. | [optional] 

## Example

```python
from openapi_client.models.gateway_route_list_result import GatewayRouteListResult

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayRouteListResult from a JSON string
gateway_route_list_result_instance = GatewayRouteListResult.from_json(json)
# print the JSON string representation of the object
print(GatewayRouteListResult.to_json())

# convert the object into a dict
gateway_route_list_result_dict = gateway_route_list_result_instance.to_dict()
# create an instance of GatewayRouteListResult from a dict
gateway_route_list_result_from_dict = GatewayRouteListResult.from_dict(gateway_route_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


