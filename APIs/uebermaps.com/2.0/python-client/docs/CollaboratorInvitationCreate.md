# CollaboratorInvitationCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **str** |  | [optional] 
**is_admin** | **bool** |  | [optional] 
**map_id** | **int** |  | [optional] 
**user_ids** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.collaborator_invitation_create import CollaboratorInvitationCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CollaboratorInvitationCreate from a JSON string
collaborator_invitation_create_instance = CollaboratorInvitationCreate.from_json(json)
# print the JSON string representation of the object
print(CollaboratorInvitationCreate.to_json())

# convert the object into a dict
collaborator_invitation_create_dict = collaborator_invitation_create_instance.to_dict()
# create an instance of CollaboratorInvitationCreate from a dict
collaborator_invitation_create_from_dict = CollaboratorInvitationCreate.from_dict(collaborator_invitation_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


