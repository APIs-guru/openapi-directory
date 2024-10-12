# RBACRoleBinding

RBACRoleBinding represents a rbacrolebinding across the Fleet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. When the rbacrolebinding was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. When the rbacrolebinding was deleted. | [optional] [readonly] 
**group** | **str** | group is the group, as seen by the kubernetes cluster. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels for this RBACRolebinding. | [optional] 
**name** | **str** | The resource name for the rbacrolebinding &#x60;projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}&#x60; or &#x60;projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}&#x60; | [optional] 
**role** | [**Role**](Role.md) |  | [optional] 
**state** | [**RBACRoleBindingLifecycleState**](RBACRoleBindingLifecycleState.md) |  | [optional] 
**uid** | **str** | Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid. | [optional] [readonly] 
**update_time** | **str** | Output only. When the rbacrolebinding was last updated. | [optional] [readonly] 
**user** | **str** | user is the name of the user as seen by the kubernetes cluster, example \&quot;alice\&quot; or \&quot;alice@domain.tld\&quot; | [optional] 

## Example

```python
from openapi_client.models.rbac_role_binding import RBACRoleBinding

# TODO update the JSON string below
json = "{}"
# create an instance of RBACRoleBinding from a JSON string
rbac_role_binding_instance = RBACRoleBinding.from_json(json)
# print the JSON string representation of the object
print(RBACRoleBinding.to_json())

# convert the object into a dict
rbac_role_binding_dict = rbac_role_binding_instance.to_dict()
# create an instance of RBACRoleBinding from a dict
rbac_role_binding_from_dict = RBACRoleBinding.from_dict(rbac_role_binding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


