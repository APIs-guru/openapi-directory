# TeamAppUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions all members of the team have on the app | 

## Example

```python
from openapi_client.models.team_app_update_request import TeamAppUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TeamAppUpdateRequest from a JSON string
team_app_update_request_instance = TeamAppUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TeamAppUpdateRequest.to_json())

# convert the object into a dict
team_app_update_request_dict = team_app_update_request_instance.to_dict()
# create an instance of TeamAppUpdateRequest from a dict
team_app_update_request_from_dict = TeamAppUpdateRequest.from_dict(team_app_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


