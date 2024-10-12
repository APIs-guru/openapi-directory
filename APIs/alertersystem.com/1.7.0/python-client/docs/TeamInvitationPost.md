# TeamInvitationPost

The TeamInvitation resource is a collection of invitations that have been sent to people to become team members of partitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**invitee_email** | **str** | The email address of the person that is being invited. | 
**invitee_first_name** | **str** | The first name of the person that is being invited. | 
**invitee_last_name** | **str** | The last name of the person that is being invited. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**team_member_role_code** | **str** | The role of the team member on the team. | [optional] 

## Example

```python
from openapi_client.models.team_invitation_post import TeamInvitationPost

# TODO update the JSON string below
json = "{}"
# create an instance of TeamInvitationPost from a JSON string
team_invitation_post_instance = TeamInvitationPost.from_json(json)
# print the JSON string representation of the object
print(TeamInvitationPost.to_json())

# convert the object into a dict
team_invitation_post_dict = team_invitation_post_instance.to_dict()
# create an instance of TeamInvitationPost from a dict
team_invitation_post_from_dict = TeamInvitationPost.from_dict(team_invitation_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


