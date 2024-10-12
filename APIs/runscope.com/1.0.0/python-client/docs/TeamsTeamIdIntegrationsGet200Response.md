# TeamsTeamIdIntegrationsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Integration]**](Integration.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.teams_team_id_integrations_get200_response import TeamsTeamIdIntegrationsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsTeamIdIntegrationsGet200Response from a JSON string
teams_team_id_integrations_get200_response_instance = TeamsTeamIdIntegrationsGet200Response.from_json(json)
# print the JSON string representation of the object
print(TeamsTeamIdIntegrationsGet200Response.to_json())

# convert the object into a dict
teams_team_id_integrations_get200_response_dict = teams_team_id_integrations_get200_response_instance.to_dict()
# create an instance of TeamsTeamIdIntegrationsGet200Response from a dict
teams_team_id_integrations_get200_response_from_dict = TeamsTeamIdIntegrationsGet200Response.from_dict(teams_team_id_integrations_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


