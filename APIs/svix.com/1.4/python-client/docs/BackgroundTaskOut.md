# BackgroundTaskOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | 
**id** | **str** |  | 
**status** | [**BackgroundTaskStatus**](BackgroundTaskStatus.md) |  | 
**task** | [**BackgroundTaskType**](BackgroundTaskType.md) |  | 

## Example

```python
from openapi_client.models.background_task_out import BackgroundTaskOut

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundTaskOut from a JSON string
background_task_out_instance = BackgroundTaskOut.from_json(json)
# print the JSON string representation of the object
print(BackgroundTaskOut.to_json())

# convert the object into a dict
background_task_out_dict = background_task_out_instance.to_dict()
# create an instance of BackgroundTaskOut from a dict
background_task_out_from_dict = BackgroundTaskOut.from_dict(background_task_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


