# UserInvitationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**UserInvitationCreateRequestDataAttributes**](UserInvitationCreateRequestDataAttributes.md) |  | 
**relationships** | [**UserInvitationCreateRequestDataRelationships**](UserInvitationCreateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.user_invitation_create_request_data import UserInvitationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationCreateRequestData from a JSON string
user_invitation_create_request_data_instance = UserInvitationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(UserInvitationCreateRequestData.to_json())

# convert the object into a dict
user_invitation_create_request_data_dict = user_invitation_create_request_data_instance.to_dict()
# create an instance of UserInvitationCreateRequestData from a dict
user_invitation_create_request_data_from_dict = UserInvitationCreateRequestData.from_dict(user_invitation_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


