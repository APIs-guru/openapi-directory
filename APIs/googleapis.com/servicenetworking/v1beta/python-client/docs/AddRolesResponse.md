# AddRolesResponse

Represents IAM roles added to the shared VPC host project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_binding** | [**List[PolicyBinding]**](PolicyBinding.md) | Required. List of policy bindings that were added to the shared VPC host project. | [optional] 

## Example

```python
from openapi_client.models.add_roles_response import AddRolesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddRolesResponse from a JSON string
add_roles_response_instance = AddRolesResponse.from_json(json)
# print the JSON string representation of the object
print(AddRolesResponse.to_json())

# convert the object into a dict
add_roles_response_dict = add_roles_response_instance.to_dict()
# create an instance of AddRolesResponse from a dict
add_roles_response_from_dict = AddRolesResponse.from_dict(add_roles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


