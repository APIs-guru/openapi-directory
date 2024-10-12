# ProjectTeamMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | [**TeamRole**](TeamRole.md) |  | [optional] 
**userid** | **str** | The id of the user that created the project. If the creator is not known this value is *null* | [optional] 

## Example

```python
from openapi_client.models.project_team_member import ProjectTeamMember

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectTeamMember from a JSON string
project_team_member_instance = ProjectTeamMember.from_json(json)
# print the JSON string representation of the object
print(ProjectTeamMember.to_json())

# convert the object into a dict
project_team_member_dict = project_team_member_instance.to_dict()
# create an instance of ProjectTeamMember from a dict
project_team_member_from_dict = ProjectTeamMember.from_dict(project_team_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


