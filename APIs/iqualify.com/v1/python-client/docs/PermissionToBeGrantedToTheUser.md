# PermissionToBeGrantedToTheUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_builder** | **bool** |  | [optional] [default to True]
**is_reviewer** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.permission_to_be_granted_to_the_user import PermissionToBeGrantedToTheUser

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionToBeGrantedToTheUser from a JSON string
permission_to_be_granted_to_the_user_instance = PermissionToBeGrantedToTheUser.from_json(json)
# print the JSON string representation of the object
print(PermissionToBeGrantedToTheUser.to_json())

# convert the object into a dict
permission_to_be_granted_to_the_user_dict = permission_to_be_granted_to_the_user_instance.to_dict()
# create an instance of PermissionToBeGrantedToTheUser from a dict
permission_to_be_granted_to_the_user_from_dict = PermissionToBeGrantedToTheUser.from_dict(permission_to_be_granted_to_the_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


