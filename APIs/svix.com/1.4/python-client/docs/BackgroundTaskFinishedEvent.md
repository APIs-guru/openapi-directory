# BackgroundTaskFinishedEvent

Sent when a background task finishes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BackgroundTaskFinishedEventData**](BackgroundTaskFinishedEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'background_task.finished']

## Example

```python
from openapi_client.models.background_task_finished_event import BackgroundTaskFinishedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundTaskFinishedEvent from a JSON string
background_task_finished_event_instance = BackgroundTaskFinishedEvent.from_json(json)
# print the JSON string representation of the object
print(BackgroundTaskFinishedEvent.to_json())

# convert the object into a dict
background_task_finished_event_dict = background_task_finished_event_instance.to_dict()
# create an instance of BackgroundTaskFinishedEvent from a dict
background_task_finished_event_from_dict = BackgroundTaskFinishedEvent.from_dict(background_task_finished_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


