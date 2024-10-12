# ScopedRoutesConfigDump

Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_scoped_route_configs** | [**List[DynamicScopedRouteConfigs]**](DynamicScopedRouteConfigs.md) | The dynamically loaded scoped route configs. | [optional] 
**inline_scoped_route_configs** | [**List[InlineScopedRouteConfigs]**](InlineScopedRouteConfigs.md) | The statically loaded scoped route configs. | [optional] 

## Example

```python
from openapi_client.models.scoped_routes_config_dump import ScopedRoutesConfigDump

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedRoutesConfigDump from a JSON string
scoped_routes_config_dump_instance = ScopedRoutesConfigDump.from_json(json)
# print the JSON string representation of the object
print(ScopedRoutesConfigDump.to_json())

# convert the object into a dict
scoped_routes_config_dump_dict = scoped_routes_config_dump_instance.to_dict()
# create an instance of ScopedRoutesConfigDump from a dict
scoped_routes_config_dump_from_dict = ScopedRoutesConfigDump.from_dict(scoped_routes_config_dump_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


