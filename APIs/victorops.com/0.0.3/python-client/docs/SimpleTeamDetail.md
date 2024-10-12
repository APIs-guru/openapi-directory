# SimpleTeamDetail

Some info about the team

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins_url** | **str** |  | [optional] 
**members_url** | **str** |  | [optional] 
**policies_url** | **str** |  | [optional] 
**self_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.simple_team_detail import SimpleTeamDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleTeamDetail from a JSON string
simple_team_detail_instance = SimpleTeamDetail.from_json(json)
# print the JSON string representation of the object
print(SimpleTeamDetail.to_json())

# convert the object into a dict
simple_team_detail_dict = simple_team_detail_instance.to_dict()
# create an instance of SimpleTeamDetail from a dict
simple_team_detail_from_dict = SimpleTeamDetail.from_dict(simple_team_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


