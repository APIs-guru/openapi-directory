# ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds

Minimum and maximum number of scale units to deploy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **int** | Maximum number of scale units deployed for ExpressRoute gateway. | [optional] 
**min** | **int** | Minimum number of scale units deployed for ExpressRoute gateway. | [optional] 

## Example

```python
from openapi_client.models.express_route_gateway_properties_auto_scale_configuration_bounds import ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds from a JSON string
express_route_gateway_properties_auto_scale_configuration_bounds_instance = ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds.to_json())

# convert the object into a dict
express_route_gateway_properties_auto_scale_configuration_bounds_dict = express_route_gateway_properties_auto_scale_configuration_bounds_instance.to_dict()
# create an instance of ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds from a dict
express_route_gateway_properties_auto_scale_configuration_bounds_from_dict = ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds.from_dict(express_route_gateway_properties_auto_scale_configuration_bounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


