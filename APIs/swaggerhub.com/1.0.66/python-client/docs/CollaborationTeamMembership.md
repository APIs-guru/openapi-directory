# CollaborationTeamMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** |  | [optional] [readonly] 
**name** | **str** | The name of a user or team | 
**start_time** | **datetime** | The date and time this user or team was added as a collaborator | [optional] [readonly] 
**uuid** | **str** | Internal ID of a user or team | [optional] [readonly] 
**donotdisturb** | **bool** |  | [optional] [readonly] 
**roles** | **List[str]** | A list of this collaborator&#39;s roles | 
**invited** | [**List[CollaborationMember]**](CollaborationMember.md) | Reserved for future use. Currently, this field is always an empty array. | [optional] [readonly] 
**members** | [**List[CollaborationMember]**](CollaborationMember.md) | A list of team members | [optional] [readonly] 

## Example

```python
from openapi_client.models.collaboration_team_membership import CollaborationTeamMembership

# TODO update the JSON string below
json = "{}"
# create an instance of CollaborationTeamMembership from a JSON string
collaboration_team_membership_instance = CollaborationTeamMembership.from_json(json)
# print the JSON string representation of the object
print(CollaborationTeamMembership.to_json())

# convert the object into a dict
collaboration_team_membership_dict = collaboration_team_membership_instance.to_dict()
# create an instance of CollaborationTeamMembership from a dict
collaboration_team_membership_from_dict = CollaborationTeamMembership.from_dict(collaboration_team_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


