# UpdateTaskInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **bool** | If set, don&#39;t actually run this operation. The response will contain the task instance planned to be affected, but won&#39;t be modified in any way.  | [optional] [default to False]
**new_state** | **str** | Expected new state. | [optional] 

## Example

```python
from openapi_client.models.update_task_instance import UpdateTaskInstance

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTaskInstance from a JSON string
update_task_instance_instance = UpdateTaskInstance.from_json(json)
# print the JSON string representation of the object
print(UpdateTaskInstance.to_json())

# convert the object into a dict
update_task_instance_dict = update_task_instance_instance.to_dict()
# create an instance of UpdateTaskInstance from a dict
update_task_instance_from_dict = UpdateTaskInstance.from_dict(update_task_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


