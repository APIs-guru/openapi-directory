# ExpressRouteGatewayProperties

ExpressRoute gateway resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale_configuration** | [**ExpressRouteGatewayPropertiesAutoScaleConfiguration**](ExpressRouteGatewayPropertiesAutoScaleConfiguration.md) |  | [optional] 
**express_route_connections** | [**List[ExpressRouteConnection]**](ExpressRouteConnection.md) | List of ExpressRoute connections to the ExpressRoute gateway. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] [readonly] 
**virtual_hub** | [**VirtualHubId**](VirtualHubId.md) |  | 

## Example

```python
from openapi_client.models.express_route_gateway_properties import ExpressRouteGatewayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteGatewayProperties from a JSON string
express_route_gateway_properties_instance = ExpressRouteGatewayProperties.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteGatewayProperties.to_json())

# convert the object into a dict
express_route_gateway_properties_dict = express_route_gateway_properties_instance.to_dict()
# create an instance of ExpressRouteGatewayProperties from a dict
express_route_gateway_properties_from_dict = ExpressRouteGatewayProperties.from_dict(express_route_gateway_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


