# RoleDefinitionListResult

Role definition list operation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[RoleDefinition]**](RoleDefinition.md) | Role definition list. | [optional] 

## Example

```python
from openapi_client.models.role_definition_list_result import RoleDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RoleDefinitionListResult from a JSON string
role_definition_list_result_instance = RoleDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(RoleDefinitionListResult.to_json())

# convert the object into a dict
role_definition_list_result_dict = role_definition_list_result_instance.to_dict()
# create an instance of RoleDefinitionListResult from a dict
role_definition_list_result_from_dict = RoleDefinitionListResult.from_dict(role_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


