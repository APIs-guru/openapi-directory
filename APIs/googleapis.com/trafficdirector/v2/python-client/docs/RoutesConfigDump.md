# RoutesConfigDump

Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_route_configs** | [**List[DynamicRouteConfig]**](DynamicRouteConfig.md) | The dynamically loaded route configs. | [optional] 
**static_route_configs** | [**List[StaticRouteConfig]**](StaticRouteConfig.md) | The statically loaded route configs. | [optional] 

## Example

```python
from openapi_client.models.routes_config_dump import RoutesConfigDump

# TODO update the JSON string below
json = "{}"
# create an instance of RoutesConfigDump from a JSON string
routes_config_dump_instance = RoutesConfigDump.from_json(json)
# print the JSON string representation of the object
print(RoutesConfigDump.to_json())

# convert the object into a dict
routes_config_dump_dict = routes_config_dump_instance.to_dict()
# create an instance of RoutesConfigDump from a dict
routes_config_dump_from_dict = RoutesConfigDump.from_dict(routes_config_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


