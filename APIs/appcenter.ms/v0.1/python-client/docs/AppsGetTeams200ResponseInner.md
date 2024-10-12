# AppsGetTeams200ResponseInner


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
from openapi_client.models.apps_get_teams200_response_inner import AppsGetTeams200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppsGetTeams200ResponseInner from a JSON string
apps_get_teams200_response_inner_instance = AppsGetTeams200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AppsGetTeams200ResponseInner.to_json())

# convert the object into a dict
apps_get_teams200_response_inner_dict = apps_get_teams200_response_inner_instance.to_dict()
# create an instance of AppsGetTeams200ResponseInner from a dict
apps_get_teams200_response_inner_from_dict = AppsGetTeams200ResponseInner.from_dict(apps_get_teams200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


