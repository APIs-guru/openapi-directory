# GetTaskResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**duration** | **str** |  | 
**error** | [**ErrorResult**](ErrorResult.md) |  | [optional] 
**result** | **Dict[str, object]** | Result produced by task after completion | [optional] 
**status** | **str** | Current status of task | 
**task_id** | **str** | ID of task | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.get_task_response import GetTaskResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaskResponse from a JSON string
get_task_response_instance = GetTaskResponse.from_json(json)
# print the JSON string representation of the object
print(GetTaskResponse.to_json())

# convert the object into a dict
get_task_response_dict = get_task_response_instance.to_dict()
# create an instance of GetTaskResponse from a dict
get_task_response_from_dict = GetTaskResponse.from_dict(get_task_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


