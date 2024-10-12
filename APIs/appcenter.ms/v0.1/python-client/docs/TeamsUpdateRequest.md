# TeamsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The new display name of the team | 

## Example

```python
from openapi_client.models.teams_update_request import TeamsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TeamsUpdateRequest from a JSON string
teams_update_request_instance = TeamsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TeamsUpdateRequest.to_json())

# convert the object into a dict
teams_update_request_dict = teams_update_request_instance.to_dict()
# create an instance of TeamsUpdateRequest from a dict
teams_update_request_from_dict = TeamsUpdateRequest.from_dict(teams_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


