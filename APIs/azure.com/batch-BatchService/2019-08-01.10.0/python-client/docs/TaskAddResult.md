# TaskAddResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | You can use this to detect whether the Task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the Job in the meantime. | [optional] 
**error** | [**BatchError**](BatchError.md) |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**location** | **str** |  | [optional] 
**status** | **str** |  | 
**task_id** | **str** |  | 

## Example

```python
from openapi_client.models.task_add_result import TaskAddResult

# TODO update the JSON string below
json = "{}"
# create an instance of TaskAddResult from a JSON string
task_add_result_instance = TaskAddResult.from_json(json)
# print the JSON string representation of the object
print(TaskAddResult.to_json())

# convert the object into a dict
task_add_result_dict = task_add_result_instance.to_dict()
# create an instance of TaskAddResult from a dict
task_add_result_from_dict = TaskAddResult.from_dict(task_add_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


