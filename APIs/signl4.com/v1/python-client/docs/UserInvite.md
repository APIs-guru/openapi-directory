# UserInvite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_invite import UserInvite

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvite from a JSON string
user_invite_instance = UserInvite.from_json(json)
# print the JSON string representation of the object
print(UserInvite.to_json())

# convert the object into a dict
user_invite_dict = user_invite_instance.to_dict()
# create an instance of UserInvite from a dict
user_invite_from_dict = UserInvite.from_dict(user_invite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


