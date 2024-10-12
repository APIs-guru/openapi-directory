# UserInviteParam

User invite parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_invite_param import UserInviteParam

# TODO update the JSON string below
json = "{}"
# create an instance of UserInviteParam from a JSON string
user_invite_param_instance = UserInviteParam.from_json(json)
# print the JSON string representation of the object
print(UserInviteParam.to_json())

# convert the object into a dict
user_invite_param_dict = user_invite_param_instance.to_dict()
# create an instance of UserInviteParam from a dict
user_invite_param_from_dict = UserInviteParam.from_dict(user_invite_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


