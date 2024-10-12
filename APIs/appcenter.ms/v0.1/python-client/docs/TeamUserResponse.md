# TeamUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**role** | **str** | The role of the user has within the team | 

## Example

```python
from openapi_client.models.team_user_response import TeamUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TeamUserResponse from a JSON string
team_user_response_instance = TeamUserResponse.from_json(json)
# print the JSON string representation of the object
print(TeamUserResponse.to_json())

# convert the object into a dict
team_user_response_dict = team_user_response_instance.to_dict()
# create an instance of TeamUserResponse from a dict
team_user_response_from_dict = TeamUserResponse.from_dict(team_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


