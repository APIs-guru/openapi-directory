# TeamScheduleOverlayResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **float** | The time the override is scheduled to end | [optional] 
**orig** | **str** | The user scheduled on call (if any) | [optional] 
**over** | **str** | The user overriding the scheduled on call user (if any) | [optional] 
**start** | **float** | The time the override is scheduled to start | [optional] 

## Example

```python
from openapi_client.models.team_schedule_overlay_resource import TeamScheduleOverlayResource

# TODO update the JSON string below
json = "{}"
# create an instance of TeamScheduleOverlayResource from a JSON string
team_schedule_overlay_resource_instance = TeamScheduleOverlayResource.from_json(json)
# print the JSON string representation of the object
print(TeamScheduleOverlayResource.to_json())

# convert the object into a dict
team_schedule_overlay_resource_dict = team_schedule_overlay_resource_instance.to_dict()
# create an instance of TeamScheduleOverlayResource from a dict
team_schedule_overlay_resource_from_dict = TeamScheduleOverlayResource.from_dict(team_schedule_overlay_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


