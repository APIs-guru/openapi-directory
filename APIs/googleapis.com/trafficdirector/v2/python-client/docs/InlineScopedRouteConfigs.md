# InlineScopedRouteConfigs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** | The timestamp when the scoped route config set was last updated. | [optional] 
**name** | **str** | The name assigned to the scoped route configurations. | [optional] 
**scoped_route_configs** | **List[Dict[str, object]]** | The scoped route configurations. | [optional] 

## Example

```python
from openapi_client.models.inline_scoped_route_configs import InlineScopedRouteConfigs

# TODO update the JSON string below
json = "{}"
# create an instance of InlineScopedRouteConfigs from a JSON string
inline_scoped_route_configs_instance = InlineScopedRouteConfigs.from_json(json)
# print the JSON string representation of the object
print(InlineScopedRouteConfigs.to_json())

# convert the object into a dict
inline_scoped_route_configs_dict = inline_scoped_route_configs_instance.to_dict()
# create an instance of InlineScopedRouteConfigs from a dict
inline_scoped_route_configs_from_dict = InlineScopedRouteConfigs.from_dict(inline_scoped_route_configs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


