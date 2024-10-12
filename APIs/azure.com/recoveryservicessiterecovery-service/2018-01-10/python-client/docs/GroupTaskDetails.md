# GroupTaskDetails

This class represents the group task details when parent child relationship exists in the drill down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_tasks** | [**List[ASRTask]**](ASRTask.md) | The child tasks. | [optional] 
**instance_type** | **str** | The type of task details. | [optional] 

## Example

```python
from openapi_client.models.group_task_details import GroupTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GroupTaskDetails from a JSON string
group_task_details_instance = GroupTaskDetails.from_json(json)
# print the JSON string representation of the object
print(GroupTaskDetails.to_json())

# convert the object into a dict
group_task_details_dict = group_task_details_instance.to_dict()
# create an instance of GroupTaskDetails from a dict
group_task_details_from_dict = GroupTaskDetails.from_dict(group_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


