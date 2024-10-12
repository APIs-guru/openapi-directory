# RoleScriptActionsInner

Describes a script action on role on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script provided. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.role_script_actions_inner import RoleScriptActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of RoleScriptActionsInner from a JSON string
role_script_actions_inner_instance = RoleScriptActionsInner.from_json(json)
# print the JSON string representation of the object
print(RoleScriptActionsInner.to_json())

# convert the object into a dict
role_script_actions_inner_dict = role_script_actions_inner_instance.to_dict()
# create an instance of RoleScriptActionsInner from a dict
role_script_actions_inner_from_dict = RoleScriptActionsInner.from_dict(role_script_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


