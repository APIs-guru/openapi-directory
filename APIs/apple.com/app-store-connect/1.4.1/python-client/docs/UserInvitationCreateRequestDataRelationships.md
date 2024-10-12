# UserInvitationCreateRequestDataRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**visible_apps** | [**UserInvitationCreateRequestDataRelationshipsVisibleApps**](UserInvitationCreateRequestDataRelationshipsVisibleApps.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_invitation_create_request_data_relationships import UserInvitationCreateRequestDataRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of UserInvitationCreateRequestDataRelationships from a JSON string
user_invitation_create_request_data_relationships_instance = UserInvitationCreateRequestDataRelationships.from_json(json)
# print the JSON string representation of the object
print(UserInvitationCreateRequestDataRelationships.to_json())

# convert the object into a dict
user_invitation_create_request_data_relationships_dict = user_invitation_create_request_data_relationships_instance.to_dict()
# create an instance of UserInvitationCreateRequestDataRelationships from a dict
user_invitation_create_request_data_relationships_from_dict = UserInvitationCreateRequestDataRelationships.from_dict(user_invitation_create_request_data_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


