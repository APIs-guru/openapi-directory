# ExpressRouteGateway

ExpressRoute gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**ExpressRouteGatewayProperties**](ExpressRouteGatewayProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_gateway import ExpressRouteGateway

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteGateway from a JSON string
express_route_gateway_instance = ExpressRouteGateway.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteGateway.to_json())

# convert the object into a dict
express_route_gateway_dict = express_route_gateway_instance.to_dict()
# create an instance of ExpressRouteGateway from a dict
express_route_gateway_from_dict = ExpressRouteGateway.from_dict(express_route_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


