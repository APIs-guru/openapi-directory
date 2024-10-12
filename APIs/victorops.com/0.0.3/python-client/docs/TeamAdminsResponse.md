# TeamAdminsResponse

A list of team admins for the team

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_admins** | [**List[TeamAdmin]**](TeamAdmin.md) |  | [optional] 

## Example

```python
from openapi_client.models.team_admins_response import TeamAdminsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAdminsResponse from a JSON string
team_admins_response_instance = TeamAdminsResponse.from_json(json)
# print the JSON string representation of the object
print(TeamAdminsResponse.to_json())

# convert the object into a dict
team_admins_response_dict = team_admins_response_instance.to_dict()
# create an instance of TeamAdminsResponse from a dict
team_admins_response_from_dict = TeamAdminsResponse.from_dict(team_admins_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


