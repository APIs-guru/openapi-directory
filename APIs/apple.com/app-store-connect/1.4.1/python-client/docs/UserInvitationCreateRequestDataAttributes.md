# UserInvitationCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_apps_visible** | **bool** |  | [optional] 
**email** | **str** |  | 
**first_name** | **str** |  | 
**last_name** | **str** |  | 
**provisioning_allowed** | **bool** |  | [optional] 
**roles** | [**List[UserRole]**](UserRole.md) |  | 

## Example

```python
from openapi_client.models.user_invitation_create_request_data_attributes import UserInvitationCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationCreateRequestDataAttributes from a JSON string
user_invitation_create_request_data_attributes_instance = UserInvitationCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(UserInvitationCreateRequestDataAttributes.to_json())

# convert the object into a dict
user_invitation_create_request_data_attributes_dict = user_invitation_create_request_data_attributes_instance.to_dict()
# create an instance of UserInvitationCreateRequestDataAttributes from a dict
user_invitation_create_request_data_attributes_from_dict = UserInvitationCreateRequestDataAttributes.from_dict(user_invitation_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


