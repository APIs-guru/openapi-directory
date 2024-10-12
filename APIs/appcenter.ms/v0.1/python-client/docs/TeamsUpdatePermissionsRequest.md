# TeamsUpdatePermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The permissions all members of the team have on the app | 

## Example

```python
from openapi_client.models.teams_update_permissions_request import TeamsUpdatePermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsUpdatePermissionsRequest from a JSON string
teams_update_permissions_request_instance = TeamsUpdatePermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(TeamsUpdatePermissionsRequest.to_json())

# convert the object into a dict
teams_update_permissions_request_dict = teams_update_permissions_request_instance.to_dict()
# create an instance of TeamsUpdatePermissionsRequest from a dict
teams_update_permissions_request_from_dict = TeamsUpdatePermissionsRequest.from_dict(teams_update_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


