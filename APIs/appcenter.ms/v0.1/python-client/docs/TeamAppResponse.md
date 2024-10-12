# TeamAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the team | [optional] 
**display_name** | **str** | The display name of the team | 
**id** | **str** | The internal unique id (UUID) of the team. | 
**name** | **str** | The name of the team | 
**permissions** | **List[str]** | The permissions the team has for the app | [optional] 

## Example

```python
from openapi_client.models.team_app_response import TeamAppResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAppResponse from a JSON string
team_app_response_instance = TeamAppResponse.from_json(json)
# print the JSON string representation of the object
print(TeamAppResponse.to_json())

# convert the object into a dict
team_app_response_dict = team_app_response_instance.to_dict()
# create an instance of TeamAppResponse from a dict
team_app_response_from_dict = TeamAppResponse.from_dict(team_app_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


