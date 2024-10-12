# TeamDetail

Some info about the team

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admins_url** | **str** |  | [optional] 
**members_url** | **str** |  | [optional] 
**policies_url** | **str** |  | [optional] 
**self_url** | **str** |  | [optional] 
**is_default_team** | **bool** |  | [optional] 
**member_count** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**version** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.team_detail import TeamDetail

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDetail from a JSON string
team_detail_instance = TeamDetail.from_json(json)
# print the JSON string representation of the object
print(TeamDetail.to_json())

# convert the object into a dict
team_detail_dict = team_detail_instance.to_dict()
# create an instance of TeamDetail from a dict
team_detail_from_dict = TeamDetail.from_dict(team_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


