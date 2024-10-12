# RepairTaskApproveDescription

Describes a request for forced approval of a repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **str** | The ID of the repair task. | 
**version** | **str** | The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed. | [optional] 

## Example

```python
from openapi_client.models.repair_task_approve_description import RepairTaskApproveDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskApproveDescription from a JSON string
repair_task_approve_description_instance = RepairTaskApproveDescription.from_json(json)
# print the JSON string representation of the object
print(RepairTaskApproveDescription.to_json())

# convert the object into a dict
repair_task_approve_description_dict = repair_task_approve_description_instance.to_dict()
# create an instance of RepairTaskApproveDescription from a dict
repair_task_approve_description_from_dict = RepairTaskApproveDescription.from_dict(repair_task_approve_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


