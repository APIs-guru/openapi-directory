# TeamScheduleRollResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change** | **float** | The time the period is scheduled to start | 
**is_roll** | **bool** |  | 
**oncall** | **str** | The user scheduled on call (if any) | [optional] 
**until** | **float** | The time the period is scheduled to end | 

## Example

```python
from openapi_client.models.team_schedule_roll_resource import TeamScheduleRollResource

# TODO update the JSON string below
json = "{}"
# create an instance of TeamScheduleRollResource from a JSON string
team_schedule_roll_resource_instance = TeamScheduleRollResource.from_json(json)
# print the JSON string representation of the object
print(TeamScheduleRollResource.to_json())

# convert the object into a dict
team_schedule_roll_resource_dict = team_schedule_roll_resource_instance.to_dict()
# create an instance of TeamScheduleRollResource from a dict
team_schedule_roll_resource_from_dict = TeamScheduleRollResource.from_dict(team_schedule_roll_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


