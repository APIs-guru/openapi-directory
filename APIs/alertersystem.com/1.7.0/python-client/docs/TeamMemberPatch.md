# TeamMemberPatch

The TeamMember resource is a collection of active team members of the partitions in a user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**team_member_role_code** | **str** | The role of the team member on the team. | 

## Example

```python
from openapi_client.models.team_member_patch import TeamMemberPatch

# TODO update the JSON string below
json = "{}"
# create an instance of TeamMemberPatch from a JSON string
team_member_patch_instance = TeamMemberPatch.from_json(json)
# print the JSON string representation of the object
print(TeamMemberPatch.to_json())

# convert the object into a dict
team_member_patch_dict = team_member_patch_instance.to_dict()
# create an instance of TeamMemberPatch from a dict
team_member_patch_from_dict = TeamMemberPatch.from_dict(team_member_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


