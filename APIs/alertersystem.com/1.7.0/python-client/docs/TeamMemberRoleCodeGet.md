# TeamMemberRoleCodeGet

The TeamMemberRoleCode resource is a set of codes that describes the different roles that can be assigned to team members of partitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_description** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.team_member_role_code_get import TeamMemberRoleCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of TeamMemberRoleCodeGet from a JSON string
team_member_role_code_get_instance = TeamMemberRoleCodeGet.from_json(json)
# print the JSON string representation of the object
print(TeamMemberRoleCodeGet.to_json())

# convert the object into a dict
team_member_role_code_get_dict = team_member_role_code_get_instance.to_dict()
# create an instance of TeamMemberRoleCodeGet from a dict
team_member_role_code_get_from_dict = TeamMemberRoleCodeGet.from_dict(team_member_role_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


