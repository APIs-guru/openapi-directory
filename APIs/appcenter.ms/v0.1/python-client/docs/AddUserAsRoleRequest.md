# AddUserAsRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The role of the user to be added | [optional] 

## Example

```python
from openapi_client.models.add_user_as_role_request import AddUserAsRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserAsRoleRequest from a JSON string
add_user_as_role_request_instance = AddUserAsRoleRequest.from_json(json)
# print the JSON string representation of the object
print(AddUserAsRoleRequest.to_json())

# convert the object into a dict
add_user_as_role_request_dict = add_user_as_role_request_instance.to_dict()
# create an instance of AddUserAsRoleRequest from a dict
add_user_as_role_request_from_dict = AddUserAsRoleRequest.from_dict(add_user_as_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


