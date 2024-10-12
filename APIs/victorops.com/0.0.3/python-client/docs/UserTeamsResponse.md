# UserTeamsResponse

A list of teams to which the user belongs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**teams** | [**List[SimpleTeamDetail]**](SimpleTeamDetail.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_teams_response import UserTeamsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UserTeamsResponse from a JSON string
user_teams_response_instance = UserTeamsResponse.from_json(json)
# print the JSON string representation of the object
print(UserTeamsResponse.to_json())

# convert the object into a dict
user_teams_response_dict = user_teams_response_instance.to_dict()
# create an instance of UserTeamsResponse from a dict
user_teams_response_from_dict = UserTeamsResponse.from_dict(user_teams_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


