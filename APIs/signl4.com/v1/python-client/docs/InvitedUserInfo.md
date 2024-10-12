# InvitedUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**is_invite** | **bool** |  | [optional] 
**mail** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**role_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.invited_user_info import InvitedUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InvitedUserInfo from a JSON string
invited_user_info_instance = InvitedUserInfo.from_json(json)
# print the JSON string representation of the object
print(InvitedUserInfo.to_json())

# convert the object into a dict
invited_user_info_dict = invited_user_info_instance.to_dict()
# create an instance of InvitedUserInfo from a dict
invited_user_info_from_dict = InvitedUserInfo.from_dict(invited_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


