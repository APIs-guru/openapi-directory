# TeamMemberGet

The TeamMember resource is a collection of active team members of the partitions in a user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**team_member_role_code** | **str** | The role of the team member on the team. | 
**user_account** | **str** | The user account that is related to this resource. | [optional] 

## Example

```python
from openapi_client.models.team_member_get import TeamMemberGet

# TODO update the JSON string below
json = "{}"
# create an instance of TeamMemberGet from a JSON string
team_member_get_instance = TeamMemberGet.from_json(json)
# print the JSON string representation of the object
print(TeamMemberGet.to_json())

# convert the object into a dict
team_member_get_dict = team_member_get_instance.to_dict()
# create an instance of TeamMemberGet from a dict
team_member_get_from_dict = TeamMemberGet.from_dict(team_member_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


