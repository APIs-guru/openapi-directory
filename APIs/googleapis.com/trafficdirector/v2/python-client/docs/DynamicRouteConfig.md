# DynamicRouteConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the Route was last updated. | [optional] 
**route_config** | **Dict[str, object]** | The route config. | [optional] 
**version_info** | **str** | This is the per-resource version information. This version is currently taken from the :ref:&#x60;version_info &#x60; field at the time that the route configuration was loaded. | [optional] 

## Example

```python
from openapi_client.models.dynamic_route_config import DynamicRouteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicRouteConfig from a JSON string
dynamic_route_config_instance = DynamicRouteConfig.from_json(json)
# print the JSON string representation of the object
print(DynamicRouteConfig.to_json())

# convert the object into a dict
dynamic_route_config_dict = dynamic_route_config_instance.to_dict()
# create an instance of DynamicRouteConfig from a dict
dynamic_route_config_from_dict = DynamicRouteConfig.from_dict(dynamic_route_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


