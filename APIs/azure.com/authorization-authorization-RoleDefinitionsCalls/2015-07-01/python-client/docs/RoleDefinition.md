# RoleDefinition

Role definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The role definition ID. | [optional] [readonly] 
**name** | **str** | The role definition name. | [optional] [readonly] 
**properties** | [**RoleDefinitionProperties**](RoleDefinitionProperties.md) |  | [optional] 
**type** | **str** | The role definition type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.role_definition import RoleDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RoleDefinition from a JSON string
role_definition_instance = RoleDefinition.from_json(json)
# print the JSON string representation of the object
print(RoleDefinition.to_json())

# convert the object into a dict
role_definition_dict = role_definition_instance.to_dict()
# create an instance of RoleDefinition from a dict
role_definition_from_dict = RoleDefinition.from_dict(role_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


