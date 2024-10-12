# ScopeMapUpdateParameters

The properties for updating the scope map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScopeMapPropertiesUpdateParameters**](ScopeMapPropertiesUpdateParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.scope_map_update_parameters import ScopeMapUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeMapUpdateParameters from a JSON string
scope_map_update_parameters_instance = ScopeMapUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ScopeMapUpdateParameters.to_json())

# convert the object into a dict
scope_map_update_parameters_dict = scope_map_update_parameters_instance.to_dict()
# create an instance of ScopeMapUpdateParameters from a dict
scope_map_update_parameters_from_dict = ScopeMapUpdateParameters.from_dict(scope_map_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


