# ListResponseBackgroundTaskOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BackgroundTaskOut]**](BackgroundTaskOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 
**prev_iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_background_task_out import ListResponseBackgroundTaskOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseBackgroundTaskOut from a JSON string
list_response_background_task_out_instance = ListResponseBackgroundTaskOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseBackgroundTaskOut.to_json())

# convert the object into a dict
list_response_background_task_out_dict = list_response_background_task_out_instance.to_dict()
# create an instance of ListResponseBackgroundTaskOut from a dict
list_response_background_task_out_from_dict = ListResponseBackgroundTaskOut.from_dict(list_response_background_task_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


