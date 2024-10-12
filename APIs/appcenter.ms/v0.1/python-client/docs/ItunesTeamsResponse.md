# ItunesTeamsResponse

Itunes teams details .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_id** | **str** | Itunes team id. | [optional] 
**team_name** | **str** | Itunes Team Name | [optional] 

## Example

```python
from openapi_client.models.itunes_teams_response import ItunesTeamsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ItunesTeamsResponse from a JSON string
itunes_teams_response_instance = ItunesTeamsResponse.from_json(json)
# print the JSON string representation of the object
print(ItunesTeamsResponse.to_json())

# convert the object into a dict
itunes_teams_response_dict = itunes_teams_response_instance.to_dict()
# create an instance of ItunesTeamsResponse from a dict
itunes_teams_response_from_dict = ItunesTeamsResponse.from_dict(itunes_teams_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


