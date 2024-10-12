# CloneStep

CloneStep holds information about the clone step progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapting_os** | **object** | AdaptingOSStep contains specific step details. | [optional] 
**end_time** | **str** | The time the step has ended. | [optional] 
**instantiating_migrated_vm** | **object** | InstantiatingMigratedVMStep contains specific step details. | [optional] 
**preparing_vm_disks** | **object** | PreparingVMDisksStep contains specific step details. | [optional] 
**start_time** | **str** | The time the step has started. | [optional] 

## Example

```python
from openapi_client.models.clone_step import CloneStep

# TODO update the JSON string below
json = "{}"
# create an instance of CloneStep from a JSON string
clone_step_instance = CloneStep.from_json(json)
# print the JSON string representation of the object
print(CloneStep.to_json())

# convert the object into a dict
clone_step_dict = clone_step_instance.to_dict()
# create an instance of CloneStep from a dict
clone_step_from_dict = CloneStep.from_dict(clone_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


