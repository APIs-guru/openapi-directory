# BackgroundTaskFinishedEventData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | 
**status** | [**BackgroundTaskOpWebhookStatus**](BackgroundTaskOpWebhookStatus.md) |  | 
**task** | [**BackgroundTaskOpWebhookType**](BackgroundTaskOpWebhookType.md) |  | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.background_task_finished_event_data import BackgroundTaskFinishedEventData

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundTaskFinishedEventData from a JSON string
background_task_finished_event_data_instance = BackgroundTaskFinishedEventData.from_json(json)
# print the JSON string representation of the object
print(BackgroundTaskFinishedEventData.to_json())

# convert the object into a dict
background_task_finished_event_data_dict = background_task_finished_event_data_instance.to_dict()
# create an instance of BackgroundTaskFinishedEventData from a dict
background_task_finished_event_data_from_dict = BackgroundTaskFinishedEventData.from_dict(background_task_finished_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


