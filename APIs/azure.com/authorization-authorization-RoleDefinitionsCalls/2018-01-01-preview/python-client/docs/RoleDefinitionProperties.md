# RoleDefinitionProperties

Role definition properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignable_scopes** | **List[str]** | Role definition assignable scopes. | [optional] 
**description** | **str** | The role definition description. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | Role definition permissions. | [optional] 
**role_name** | **str** | The role name. | [optional] 
**type** | **str** | The role type. | [optional] 

## Example

```python
from openapi_client.models.role_definition_properties import RoleDefinitionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoleDefinitionProperties from a JSON string
role_definition_properties_instance = RoleDefinitionProperties.from_json(json)
# print the JSON string representation of the object
print(RoleDefinitionProperties.to_json())

# convert the object into a dict
role_definition_properties_dict = role_definition_properties_instance.to_dict()
# create an instance of RoleDefinitionProperties from a dict
role_definition_properties_from_dict = RoleDefinitionProperties.from_dict(role_definition_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


