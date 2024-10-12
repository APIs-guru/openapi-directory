# GenerateMembershipRBACRoleBindingYAMLResponse

Response for GenerateRBACRoleBindingYAML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_bindings_yaml** | **str** | a yaml text blob including the RBAC policies. | [optional] 

## Example

```python
from openapi_client.models.generate_membership_rbac_role_binding_yaml_response import GenerateMembershipRBACRoleBindingYAMLResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMembershipRBACRoleBindingYAMLResponse from a JSON string
generate_membership_rbac_role_binding_yaml_response_instance = GenerateMembershipRBACRoleBindingYAMLResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateMembershipRBACRoleBindingYAMLResponse.to_json())

# convert the object into a dict
generate_membership_rbac_role_binding_yaml_response_dict = generate_membership_rbac_role_binding_yaml_response_instance.to_dict()
# create an instance of GenerateMembershipRBACRoleBindingYAMLResponse from a dict
generate_membership_rbac_role_binding_yaml_response_from_dict = GenerateMembershipRBACRoleBindingYAMLResponse.from_dict(generate_membership_rbac_role_binding_yaml_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


