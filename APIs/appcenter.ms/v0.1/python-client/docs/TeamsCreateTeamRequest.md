# TeamsCreateTeamRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the team | [optional] 
**display_name** | **str** | The display name of the team | 
**name** | **str** | The name of the team | [optional] 

## Example

```python
from openapi_client.models.teams_create_team_request import TeamsCreateTeamRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsCreateTeamRequest from a JSON string
teams_create_team_request_instance = TeamsCreateTeamRequest.from_json(json)
# print the JSON string representation of the object
print(TeamsCreateTeamRequest.to_json())

# convert the object into a dict
teams_create_team_request_dict = teams_create_team_request_instance.to_dict()
# create an instance of TeamsCreateTeamRequest from a dict
teams_create_team_request_from_dict = TeamsCreateTeamRequest.from_dict(teams_create_team_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


