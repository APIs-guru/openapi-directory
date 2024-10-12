# TeamMemberRoleCodeJsonldGet

The TeamMemberRoleCode resource is a set of codes that describes the different roles that can be assigned to team members of partitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**code_description** | **str** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.team_member_role_code_jsonld_get import TeamMemberRoleCodeJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of TeamMemberRoleCodeJsonldGet from a JSON string
team_member_role_code_jsonld_get_instance = TeamMemberRoleCodeJsonldGet.from_json(json)
# print the JSON string representation of the object
print(TeamMemberRoleCodeJsonldGet.to_json())

# convert the object into a dict
team_member_role_code_jsonld_get_dict = team_member_role_code_jsonld_get_instance.to_dict()
# create an instance of TeamMemberRoleCodeJsonldGet from a dict
team_member_role_code_jsonld_get_from_dict = TeamMemberRoleCodeJsonldGet.from_dict(team_member_role_code_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


