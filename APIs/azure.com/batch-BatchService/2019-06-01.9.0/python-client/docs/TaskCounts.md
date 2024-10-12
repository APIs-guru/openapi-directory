# TaskCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** |  | 
**completed** | **int** |  | 
**failed** | **int** |  | 
**running** | **int** |  | 
**succeeded** | **int** |  | 

## Example

```python
from openapi_client.models.task_counts import TaskCounts

# TODO update the JSON string below
json = "{}"
# create an instance of TaskCounts from a JSON string
task_counts_instance = TaskCounts.from_json(json)
# print the JSON string representation of the object
print(TaskCounts.to_json())

# convert the object into a dict
task_counts_dict = task_counts_instance.to_dict()
# create an instance of TaskCounts from a dict
task_counts_from_dict = TaskCounts.from_dict(task_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


