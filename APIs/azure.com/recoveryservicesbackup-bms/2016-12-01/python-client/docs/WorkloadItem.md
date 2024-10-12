# WorkloadItem

Base class for backup item. Workload-specific backup items are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management to backup an item. | [optional] 
**friendly_name** | **str** | Friendly name of the backup item. | [optional] 
**protection_state** | **str** | State of the back up item. | [optional] 
**workload_item_type** | **str** | Type of the backup item. | [optional] 
**workload_type** | **str** | Type of workload for the backup management | [optional] 

## Example

```python
from openapi_client.models.workload_item import WorkloadItem

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadItem from a JSON string
workload_item_instance = WorkloadItem.from_json(json)
# print the JSON string representation of the object
print(WorkloadItem.to_json())

# convert the object into a dict
workload_item_dict = workload_item_instance.to_dict()
# create an instance of WorkloadItem from a dict
workload_item_from_dict = WorkloadItem.from_dict(workload_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


