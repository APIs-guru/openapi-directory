# UserPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_password** | **bool** | Change (own) password permission flag | 
**delete** | **bool** | Delete permission flag | 
**delete_form_data** | **bool** | Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded. | 
**download** | **bool** | Download permission flag | 
**list** | **bool** | View folder contents permission flag | 
**modify** | **bool** | Modify permission flag | 
**notification** | **bool** | Notifications permission flag | 
**share** | **bool** | Sharing permission flag | 
**upload** | **bool** | Upload permission flag | 
**view_form_data** | **bool** | Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form. | 

## Example

```python
from openapi_client.models.user_permissions import UserPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of UserPermissions from a JSON string
user_permissions_instance = UserPermissions.from_json(json)
# print the JSON string representation of the object
print(UserPermissions.to_json())

# convert the object into a dict
user_permissions_dict = user_permissions_instance.to_dict()
# create an instance of UserPermissions from a dict
user_permissions_from_dict = UserPermissions.from_dict(user_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


