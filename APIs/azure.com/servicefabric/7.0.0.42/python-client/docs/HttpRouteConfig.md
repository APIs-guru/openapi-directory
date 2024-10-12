# HttpRouteConfig

Describes the hostname properties for http routing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**GatewayDestination**](GatewayDestination.md) |  | 
**match** | [**HttpRouteMatchRule**](HttpRouteMatchRule.md) |  | 
**name** | **str** | http route name. | 

## Example

```python
from openapi_client.models.http_route_config import HttpRouteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteConfig from a JSON string
http_route_config_instance = HttpRouteConfig.from_json(json)
# print the JSON string representation of the object
print(HttpRouteConfig.to_json())

# convert the object into a dict
http_route_config_dict = http_route_config_instance.to_dict()
# create an instance of HttpRouteConfig from a dict
http_route_config_from_dict = HttpRouteConfig.from_dict(http_route_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


