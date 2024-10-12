# RoleDefinitionFilter

Role Definitions filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_name** | **str** | Returns role definition with the specific name. | [optional] 
**type** | **str** | Returns role definition with the specific type. | [optional] 

## Example

```python
from openapi_client.models.role_definition_filter import RoleDefinitionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RoleDefinitionFilter from a JSON string
role_definition_filter_instance = RoleDefinitionFilter.from_json(json)
# print the JSON string representation of the object
print(RoleDefinitionFilter.to_json())

# convert the object into a dict
role_definition_filter_dict = role_definition_filter_instance.to_dict()
# create an instance of RoleDefinitionFilter from a dict
role_definition_filter_from_dict = RoleDefinitionFilter.from_dict(role_definition_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


