# ScheduleApiTriggeredCanvasesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | [**ScheduleApiTriggeredCanvasesRequestAudience**](ScheduleApiTriggeredCanvasesRequestAudience.md) |  | [optional] 
**broadcast** | **bool** |  | [optional] 
**canvas_entry_properties** | **object** |  | [optional] 
**canvas_id** | **str** |  | [optional] 
**recipients** | [**List[ScheduleApiTriggeredCanvasesRequestRecipientsInner]**](ScheduleApiTriggeredCanvasesRequestRecipientsInner.md) |  | [optional] 
**schedule** | [**ScheduleApiTriggeredCanvasesRequestSchedule**](ScheduleApiTriggeredCanvasesRequestSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.schedule_api_triggered_canvases_request import ScheduleApiTriggeredCanvasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleApiTriggeredCanvasesRequest from a JSON string
schedule_api_triggered_canvases_request_instance = ScheduleApiTriggeredCanvasesRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleApiTriggeredCanvasesRequest.to_json())

# convert the object into a dict
schedule_api_triggered_canvases_request_dict = schedule_api_triggered_canvases_request_instance.to_dict()
# create an instance of ScheduleApiTriggeredCanvasesRequest from a dict
schedule_api_triggered_canvases_request_from_dict = ScheduleApiTriggeredCanvasesRequest.from_dict(schedule_api_triggered_canvases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


