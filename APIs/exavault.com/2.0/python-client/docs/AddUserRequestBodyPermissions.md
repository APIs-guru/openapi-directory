# AddUserRequestBodyPermissions

An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission. When creating a user with the `role` **admin**, you should set all of the permissions to `true`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_password** | **bool** |  | [optional] 
**delete** | **bool** |  | [optional] 
**delete_form_data** | **bool** |  | [optional] 
**download** | **bool** |  | [optional] 
**list** | **bool** |  | [optional] 
**modify** | **bool** |  | [optional] 
**notification** | **bool** |  | [optional] 
**share** | **bool** |  | [optional] 
**upload** | **bool** |  | [optional] 
**view_form_data** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.add_user_request_body_permissions import AddUserRequestBodyPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserRequestBodyPermissions from a JSON string
add_user_request_body_permissions_instance = AddUserRequestBodyPermissions.from_json(json)
# print the JSON string representation of the object
print(AddUserRequestBodyPermissions.to_json())

# convert the object into a dict
add_user_request_body_permissions_dict = add_user_request_body_permissions_instance.to_dict()
# create an instance of AddUserRequestBodyPermissions from a dict
add_user_request_body_permissions_from_dict = AddUserRequestBodyPermissions.from_dict(add_user_request_body_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


