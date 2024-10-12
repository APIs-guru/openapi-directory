# ScopeMap

An object that represents a scope map for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScopeMapProperties**](ScopeMapProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_map import ScopeMap

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeMap from a JSON string
scope_map_instance = ScopeMap.from_json(json)
# print the JSON string representation of the object
print(ScopeMap.to_json())

# convert the object into a dict
scope_map_dict = scope_map_instance.to_dict()
# create an instance of ScopeMap from a dict
scope_map_from_dict = ScopeMap.from_dict(scope_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


