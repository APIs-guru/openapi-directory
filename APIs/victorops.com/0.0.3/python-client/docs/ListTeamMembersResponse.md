# ListTeamMembersResponse

A list of members for the team

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_url** | **str** |  | [optional] 
**team_url** | **str** |  | [optional] 
**members** | [**List[TeamMember]**](TeamMember.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_team_members_response import ListTeamMembersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTeamMembersResponse from a JSON string
list_team_members_response_instance = ListTeamMembersResponse.from_json(json)
# print the JSON string representation of the object
print(ListTeamMembersResponse.to_json())

# convert the object into a dict
list_team_members_response_dict = list_team_members_response_instance.to_dict()
# create an instance of ListTeamMembersResponse from a dict
list_team_members_response_from_dict = ListTeamMembersResponse.from_dict(list_team_members_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


