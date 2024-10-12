# TeamSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedules** | [**List[PolicySchedule]**](PolicySchedule.md) |  | [optional] 
**team** | [**Team**](Team.md) |  | [optional] 

## Example

```python
from openapi_client.models.team_schedule import TeamSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of TeamSchedule from a JSON string
team_schedule_instance = TeamSchedule.from_json(json)
# print the JSON string representation of the object
print(TeamSchedule.to_json())

# convert the object into a dict
team_schedule_dict = team_schedule_instance.to_dict()
# create an instance of TeamSchedule from a dict
team_schedule_from_dict = TeamSchedule.from_dict(team_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


