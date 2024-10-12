# ListScopeRBACRoleBindingsResponse

List of Scope RBACRoleBindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListScopeRBACRoleBindings&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**rbacrolebindings** | [**List[RBACRoleBinding]**](RBACRoleBinding.md) | The list of Scope RBACRoleBindings. | [optional] 

## Example

```python
from openapi_client.models.list_scope_rbac_role_bindings_response import ListScopeRBACRoleBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScopeRBACRoleBindingsResponse from a JSON string
list_scope_rbac_role_bindings_response_instance = ListScopeRBACRoleBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListScopeRBACRoleBindingsResponse.to_json())

# convert the object into a dict
list_scope_rbac_role_bindings_response_dict = list_scope_rbac_role_bindings_response_instance.to_dict()
# create an instance of ListScopeRBACRoleBindingsResponse from a dict
list_scope_rbac_role_bindings_response_from_dict = ListScopeRBACRoleBindingsResponse.from_dict(list_scope_rbac_role_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


