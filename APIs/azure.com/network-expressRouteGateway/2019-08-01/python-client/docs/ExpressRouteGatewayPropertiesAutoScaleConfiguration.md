# ExpressRouteGatewayPropertiesAutoScaleConfiguration

Configuration for auto scaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounds** | [**ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds**](ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds.md) |  | [optional] 

## Example

```python
from openapi_client.models.express_route_gateway_properties_auto_scale_configuration import ExpressRouteGatewayPropertiesAutoScaleConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteGatewayPropertiesAutoScaleConfiguration from a JSON string
express_route_gateway_properties_auto_scale_configuration_instance = ExpressRouteGatewayPropertiesAutoScaleConfiguration.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteGatewayPropertiesAutoScaleConfiguration.to_json())

# convert the object into a dict
express_route_gateway_properties_auto_scale_configuration_dict = express_route_gateway_properties_auto_scale_configuration_instance.to_dict()
# create an instance of ExpressRouteGatewayPropertiesAutoScaleConfiguration from a dict
express_route_gateway_properties_auto_scale_configuration_from_dict = ExpressRouteGatewayPropertiesAutoScaleConfiguration.from_dict(express_route_gateway_properties_auto_scale_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


