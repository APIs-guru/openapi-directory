# UsersInviteVendorUserPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**external_id** | **str** |  | [optional] 
**full_name** | **str** |  | 
**permission_group_id** | **float** |  | [optional] 
**team** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.users_invite_vendor_user_post_request import UsersInviteVendorUserPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInviteVendorUserPostRequest from a JSON string
users_invite_vendor_user_post_request_instance = UsersInviteVendorUserPostRequest.from_json(json)
# print the JSON string representation of the object
print(UsersInviteVendorUserPostRequest.to_json())

# convert the object into a dict
users_invite_vendor_user_post_request_dict = users_invite_vendor_user_post_request_instance.to_dict()
# create an instance of UsersInviteVendorUserPostRequest from a dict
users_invite_vendor_user_post_request_from_dict = UsersInviteVendorUserPostRequest.from_dict(users_invite_vendor_user_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


