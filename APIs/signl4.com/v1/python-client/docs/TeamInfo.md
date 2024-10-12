# TeamInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**member_ids** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**timezone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.team_info import TeamInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TeamInfo from a JSON string
team_info_instance = TeamInfo.from_json(json)
# print the JSON string representation of the object
print(TeamInfo.to_json())

# convert the object into a dict
team_info_dict = team_info_instance.to_dict()
# create an instance of TeamInfo from a dict
team_info_from_dict = TeamInfo.from_dict(team_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


