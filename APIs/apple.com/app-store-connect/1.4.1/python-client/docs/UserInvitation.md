# UserInvitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**UserInvitationAttributes**](UserInvitationAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**UserRelationships**](UserRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.user_invitation import UserInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitation from a JSON string
user_invitation_instance = UserInvitation.from_json(json)
# print the JSON string representation of the object
print(UserInvitation.to_json())

# convert the object into a dict
user_invitation_dict = user_invitation_instance.to_dict()
# create an instance of UserInvitation from a dict
user_invitation_from_dict = UserInvitation.from_dict(user_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


