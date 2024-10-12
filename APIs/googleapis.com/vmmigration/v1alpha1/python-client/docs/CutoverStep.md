# CutoverStep

CutoverStep holds information about the cutover step progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time the step has ended. | [optional] 
**final_sync** | [**ReplicationCycle**](ReplicationCycle.md) |  | [optional] 
**instantiating_migrated_vm** | **object** | InstantiatingMigratedVMStep contains specific step details. | [optional] 
**preparing_vm_disks** | **object** | PreparingVMDisksStep contains specific step details. | [optional] 
**previous_replication_cycle** | [**ReplicationCycle**](ReplicationCycle.md) |  | [optional] 
**shutting_down_source_vm** | **object** | ShuttingDownSourceVMStep contains specific step details. | [optional] 
**start_time** | **str** | The time the step has started. | [optional] 

## Example

```python
from openapi_client.models.cutover_step import CutoverStep

# TODO update the JSON string below
json = "{}"
# create an instance of CutoverStep from a JSON string
cutover_step_instance = CutoverStep.from_json(json)
# print the JSON string representation of the object
print(CutoverStep.to_json())

# convert the object into a dict
cutover_step_dict = cutover_step_instance.to_dict()
# create an instance of CutoverStep from a dict
cutover_step_from_dict = CutoverStep.from_dict(cutover_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


