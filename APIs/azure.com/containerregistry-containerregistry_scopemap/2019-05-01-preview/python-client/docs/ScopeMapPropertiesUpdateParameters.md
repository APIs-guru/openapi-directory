# ScopeMapPropertiesUpdateParameters

The update parameters for scope map properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of scope permissions for registry artifacts.  E.g. repositories/repository-name/pull,   repositories/repository-name/delete | [optional] 
**description** | **str** | The user friendly description of the scope map. | [optional] 

## Example

```python
from openapi_client.models.scope_map_properties_update_parameters import ScopeMapPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeMapPropertiesUpdateParameters from a JSON string
scope_map_properties_update_parameters_instance = ScopeMapPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ScopeMapPropertiesUpdateParameters.to_json())

# convert the object into a dict
scope_map_properties_update_parameters_dict = scope_map_properties_update_parameters_instance.to_dict()
# create an instance of ScopeMapPropertiesUpdateParameters from a dict
scope_map_properties_update_parameters_from_dict = ScopeMapPropertiesUpdateParameters.from_dict(scope_map_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


