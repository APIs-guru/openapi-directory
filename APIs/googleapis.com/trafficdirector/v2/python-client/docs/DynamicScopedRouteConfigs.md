# DynamicScopedRouteConfigs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the scoped route config set was last updated. | [optional] 
**name** | **str** | The name assigned to the scoped route configurations. | [optional] 
**scoped_route_configs** | **List[Dict[str, object]]** | The scoped route configurations. | [optional] 
**version_info** | **str** | This is the per-resource version information. This version is currently taken from the :ref:&#x60;version_info &#x60; field at the time that the scoped routes configuration was loaded. | [optional] 

## Example

```python
from openapi_client.models.dynamic_scoped_route_configs import DynamicScopedRouteConfigs

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicScopedRouteConfigs from a JSON string
dynamic_scoped_route_configs_instance = DynamicScopedRouteConfigs.from_json(json)
# print the JSON string representation of the object
print(DynamicScopedRouteConfigs.to_json())

# convert the object into a dict
dynamic_scoped_route_configs_dict = dynamic_scoped_route_configs_instance.to_dict()
# create an instance of DynamicScopedRouteConfigs from a dict
dynamic_scoped_route_configs_from_dict = DynamicScopedRouteConfigs.from_dict(dynamic_scoped_route_configs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


