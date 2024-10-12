# WorkloadProtectableItem

The base class for backup item. Workload-specific backup items are derived from this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type. | [optional] 
**friendly_name** | **str** | The friendly name of the backup item. | [optional] 
**protectable_item_type** | **str** | The type of the backup item. | [optional] 
**protection_state** | **str** | The state of the back up item. | [optional] 

## Example

```python
from openapi_client.models.workload_protectable_item import WorkloadProtectableItem

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProtectableItem from a JSON string
workload_protectable_item_instance = WorkloadProtectableItem.from_json(json)
# print the JSON string representation of the object
print(WorkloadProtectableItem.to_json())

# convert the object into a dict
workload_protectable_item_dict = workload_protectable_item_instance.to_dict()
# create an instance of WorkloadProtectableItem from a dict
workload_protectable_item_from_dict = WorkloadProtectableItem.from_dict(workload_protectable_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


