# RepairTaskDeleteDescription

Describes a request to delete a completed repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **str** | The ID of the completed repair task to be deleted. | 
**version** | **str** | The current version number of the repair task. If non-zero, then the request will only succeed if this value matches the actual current version of the repair task. If zero, then no version check is performed. | [optional] 

## Example

```python
from openapi_client.models.repair_task_delete_description import RepairTaskDeleteDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTaskDeleteDescription from a JSON string
repair_task_delete_description_instance = RepairTaskDeleteDescription.from_json(json)
# print the JSON string representation of the object
print(RepairTaskDeleteDescription.to_json())

# convert the object into a dict
repair_task_delete_description_dict = repair_task_delete_description_instance.to_dict()
# create an instance of RepairTaskDeleteDescription from a dict
repair_task_delete_description_from_dict = RepairTaskDeleteDescription.from_dict(repair_task_delete_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


