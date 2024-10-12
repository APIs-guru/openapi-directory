# StaticRouteConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the Route was last updated. | [optional] 
**route_config** | **Dict[str, object]** | The route config. | [optional] 

## Example

```python
from openapi_client.models.static_route_config import StaticRouteConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StaticRouteConfig from a JSON string
static_route_config_instance = StaticRouteConfig.from_json(json)
# print the JSON string representation of the object
print(StaticRouteConfig.to_json())

# convert the object into a dict
static_route_config_dict = static_route_config_instance.to_dict()
# create an instance of StaticRouteConfig from a dict
static_route_config_from_dict = StaticRouteConfig.from_dict(static_route_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


