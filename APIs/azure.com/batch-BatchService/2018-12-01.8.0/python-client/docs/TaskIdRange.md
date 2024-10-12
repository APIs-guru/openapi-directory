# TaskIdRange

The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents tasks '9', '10', '11' and '12'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** |  | 
**start** | **int** |  | 

## Example

```python
from openapi_client.models.task_id_range import TaskIdRange

# TODO update the JSON string below
json = "{}"
# create an instance of TaskIdRange from a JSON string
task_id_range_instance = TaskIdRange.from_json(json)
# print the JSON string representation of the object
print(TaskIdRange.to_json())

# convert the object into a dict
task_id_range_dict = task_id_range_instance.to_dict()
# create an instance of TaskIdRange from a dict
task_id_range_from_dict = TaskIdRange.from_dict(task_id_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


