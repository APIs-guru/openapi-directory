# TeamsGetUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**role** | **str** | The role of the user has within the team | 

## Example

```python
from openapi_client.models.teams_get_users200_response import TeamsGetUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsGetUsers200Response from a JSON string
teams_get_users200_response_instance = TeamsGetUsers200Response.from_json(json)
# print the JSON string representation of the object
print(TeamsGetUsers200Response.to_json())

# convert the object into a dict
teams_get_users200_response_dict = teams_get_users200_response_instance.to_dict()
# create an instance of TeamsGetUsers200Response from a dict
teams_get_users200_response_from_dict = TeamsGetUsers200Response.from_dict(teams_get_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


