# TaskAddCollectionParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[TaskAddParameter]**](TaskAddParameter.md) | The total serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example if each task has 100&#39;s of resource files or environment variables), the request will fail with code &#39;RequestBodyTooLarge&#39; and should be retried again with fewer tasks. | 

## Example

```python
from openapi_client.models.task_add_collection_parameter import TaskAddCollectionParameter

# TODO update the JSON string below
json = "{}"
# create an instance of TaskAddCollectionParameter from a JSON string
task_add_collection_parameter_instance = TaskAddCollectionParameter.from_json(json)
# print the JSON string representation of the object
print(TaskAddCollectionParameter.to_json())

# convert the object into a dict
task_add_collection_parameter_dict = task_add_collection_parameter_instance.to_dict()
# create an instance of TaskAddCollectionParameter from a dict
task_add_collection_parameter_from_dict = TaskAddCollectionParameter.from_dict(task_add_collection_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


