# UserInvitationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_apps_visible** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**provisioning_allowed** | **bool** |  | [optional] 
**roles** | [**List[UserRole]**](UserRole.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_invitation_attributes import UserInvitationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationAttributes from a JSON string
user_invitation_attributes_instance = UserInvitationAttributes.from_json(json)
# print the JSON string representation of the object
print(UserInvitationAttributes.to_json())

# convert the object into a dict
user_invitation_attributes_dict = user_invitation_attributes_instance.to_dict()
# create an instance of UserInvitationAttributes from a dict
user_invitation_attributes_from_dict = UserInvitationAttributes.from_dict(user_invitation_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


