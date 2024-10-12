# ScheduleApiTriggeredCanvasesRequestSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at_optimal_time** | **bool** |  | [optional] 
**in_local_time** | **bool** |  | [optional] 
**time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.schedule_api_triggered_canvases_request_schedule import ScheduleApiTriggeredCanvasesRequestSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleApiTriggeredCanvasesRequestSchedule from a JSON string
schedule_api_triggered_canvases_request_schedule_instance = ScheduleApiTriggeredCanvasesRequestSchedule.from_json(json)
# print the JSON string representation of the object
print(ScheduleApiTriggeredCanvasesRequestSchedule.to_json())

# convert the object into a dict
schedule_api_triggered_canvases_request_schedule_dict = schedule_api_triggered_canvases_request_schedule_instance.to_dict()
# create an instance of ScheduleApiTriggeredCanvasesRequestSchedule from a dict
schedule_api_triggered_canvases_request_schedule_from_dict = ScheduleApiTriggeredCanvasesRequestSchedule.from_dict(schedule_api_triggered_canvases_request_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


