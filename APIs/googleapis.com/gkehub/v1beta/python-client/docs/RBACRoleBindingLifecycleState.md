# RBACRoleBindingLifecycleState

RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. The current state of the rbacrolebinding resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rbac_role_binding_lifecycle_state import RBACRoleBindingLifecycleState

# TODO update the JSON string below
json = "{}"
# create an instance of RBACRoleBindingLifecycleState from a JSON string
rbac_role_binding_lifecycle_state_instance = RBACRoleBindingLifecycleState.from_json(json)
# print the JSON string representation of the object
print(RBACRoleBindingLifecycleState.to_json())

# convert the object into a dict
rbac_role_binding_lifecycle_state_dict = rbac_role_binding_lifecycle_state_instance.to_dict()
# create an instance of RBACRoleBindingLifecycleState from a dict
rbac_role_binding_lifecycle_state_from_dict = RBACRoleBindingLifecycleState.from_dict(rbac_role_binding_lifecycle_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


