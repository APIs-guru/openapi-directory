# TeamScheduleResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oncall** | **str** | The user scheduled on call (if any) | [optional] 
**overrideoncall** | **str** | The user overriding the scheduled on call user (if any) | [optional] 
**policy_type** | **str** |  | 
**rolls** | [**List[TeamScheduleRollResource]**](TeamScheduleRollResource.md) |  | 
**rotation_name** | **str** |  | [optional] 
**shift_name** | **str** |  | [optional] 
**shift_roll** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.team_schedule_resource import TeamScheduleResource

# TODO update the JSON string below
json = "{}"
# create an instance of TeamScheduleResource from a JSON string
team_schedule_resource_instance = TeamScheduleResource.from_json(json)
# print the JSON string representation of the object
print(TeamScheduleResource.to_json())

# convert the object into a dict
team_schedule_resource_dict = team_schedule_resource_instance.to_dict()
# create an instance of TeamScheduleResource from a dict
team_schedule_resource_from_dict = TeamScheduleResource.from_dict(team_schedule_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


