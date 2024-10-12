# OnCallTeamsResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**on_call_now** | [**List[OnCallNowResource]**](OnCallNowResource.md) |  | [optional] 
**team** | [**OnCallTeamResource**](OnCallTeamResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.on_call_teams_resource import OnCallTeamsResource

# TODO update the JSON string below
json = "{}"
# create an instance of OnCallTeamsResource from a JSON string
on_call_teams_resource_instance = OnCallTeamsResource.from_json(json)
# print the JSON string representation of the object
print(OnCallTeamsResource.to_json())

# convert the object into a dict
on_call_teams_resource_dict = on_call_teams_resource_instance.to_dict()
# create an instance of OnCallTeamsResource from a dict
on_call_teams_resource_from_dict = OnCallTeamsResource.from_dict(on_call_teams_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


