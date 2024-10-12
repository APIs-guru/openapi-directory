# CollaboratorInvitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**email** | **str** |  | [optional] 
**group** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**invited_by_user** | [**User**](User.md) |  | [optional] 
**map** | [**Map**](Map.md) |  | [optional] 
**sent** | **bool** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user** | [**User**](User.md) |  | [optional] 

## Example

```python
from openapi_client.models.collaborator_invitation import CollaboratorInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of CollaboratorInvitation from a JSON string
collaborator_invitation_instance = CollaboratorInvitation.from_json(json)
# print the JSON string representation of the object
print(CollaboratorInvitation.to_json())

# convert the object into a dict
collaborator_invitation_dict = collaborator_invitation_instance.to_dict()
# create an instance of CollaboratorInvitation from a dict
collaborator_invitation_from_dict = CollaboratorInvitation.from_dict(collaborator_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


