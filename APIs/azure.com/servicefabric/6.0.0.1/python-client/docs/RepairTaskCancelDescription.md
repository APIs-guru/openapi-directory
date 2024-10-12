# RepairTaskCancelDescription

Describes a request to cancel a repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_abort** | **bool** | _True_ if the repair should be stopped as soon as possible even if it has already started executing. _False_ if the repair should be cancelled only if execution has not yet started.&lt;/para&gt; | [optional] 
**task_id** | **str** | The ID of the repair task. | 
**version** | **str** | The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed.&lt;/para&gt; | [optional] 

## Example

```python
from openapi_client.models.repair_task_cancel_description import RepairTaskCancelDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskCancelDescription from a JSON string
repair_task_cancel_description_instance = RepairTaskCancelDescription.from_json(json)
# print the JSON string representation of the object
print(RepairTaskCancelDescription.to_json())

# convert the object into a dict
repair_task_cancel_description_dict = repair_task_cancel_description_instance.to_dict()
# create an instance of RepairTaskCancelDescription from a dict
repair_task_cancel_description_from_dict = RepairTaskCancelDescription.from_dict(repair_task_cancel_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


