# UsersInviteEndUserPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_external_id** | **str** |  | [optional] 
**account_name** | **str** |  | [optional] 
**account_status** | **str** |  | 
**email** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] 
**monthly_value** | **float** |  | [optional] 
**send_invite** | **bool** |  | [optional] 
**user_external_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.users_invite_end_user_post_request import UsersInviteEndUserPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UsersInviteEndUserPostRequest from a JSON string
users_invite_end_user_post_request_instance = UsersInviteEndUserPostRequest.from_json(json)
# print the JSON string representation of the object
print(UsersInviteEndUserPostRequest.to_json())

# convert the object into a dict
users_invite_end_user_post_request_dict = users_invite_end_user_post_request_instance.to_dict()
# create an instance of UsersInviteEndUserPostRequest from a dict
users_invite_end_user_post_request_from_dict = UsersInviteEndUserPostRequest.from_dict(users_invite_end_user_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


