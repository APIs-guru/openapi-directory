# ScopeMapProperties

The properties of a scope map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of scoped permissions for registry artifacts.  E.g. repositories/repository-name/content/read,  repositories/repository-name/metadata/write | 
**creation_date** | **datetime** | The creation date of scope map. | [optional] [readonly] 
**description** | **str** | The user friendly description of the scope map. | [optional] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] [readonly] 
**type** | **str** | The type of the scope map. E.g. BuildIn scope map. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_map_properties import ScopeMapProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeMapProperties from a JSON string
scope_map_properties_instance = ScopeMapProperties.from_json(json)
# print the JSON string representation of the object
print(ScopeMapProperties.to_json())

# convert the object into a dict
scope_map_properties_dict = scope_map_properties_instance.to_dict()
# create an instance of ScopeMapProperties from a dict
scope_map_properties_from_dict = ScopeMapProperties.from_dict(scope_map_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


