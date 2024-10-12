# InviteUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the user. | [optional] 
**is_admin** | **bool** | (optional) Set the role as admin. | [optional] 

## Example

```python
from openapi_client.models.invite_users_request import InviteUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InviteUsersRequest from a JSON string
invite_users_request_instance = InviteUsersRequest.from_json(json)
# print the JSON string representation of the object
print(InviteUsersRequest.to_json())

# convert the object into a dict
invite_users_request_dict = invite_users_request_instance.to_dict()
# create an instance of InviteUsersRequest from a dict
invite_users_request_from_dict = InviteUsersRequest.from_dict(invite_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


