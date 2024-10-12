# BuildTaskListResult

The collection of build tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[BuildTask]**](BuildTask.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.build_task_list_result import BuildTaskListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskListResult from a JSON string
build_task_list_result_instance = BuildTaskListResult.from_json(json)
# print the JSON string representation of the object
print(BuildTaskListResult.to_json())

# convert the object into a dict
build_task_list_result_dict = build_task_list_result_instance.to_dict()
# create an instance of BuildTaskListResult from a dict
build_task_list_result_from_dict = BuildTaskListResult.from_dict(build_task_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


