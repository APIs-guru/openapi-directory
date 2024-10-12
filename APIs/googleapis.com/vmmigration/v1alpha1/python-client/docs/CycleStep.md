# CycleStep

CycleStep holds information about a step progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time the cycle step has ended. | [optional] 
**initializing_replication** | **object** | InitializingReplicationStep contains specific step details. | [optional] 
**post_processing** | **object** | PostProcessingStep contains specific step details. | [optional] 
**replicating** | [**ReplicatingStep**](ReplicatingStep.md) |  | [optional] 
**start_time** | **str** | The time the cycle step has started. | [optional] 

## Example

```python
from openapi_client.models.cycle_step import CycleStep

# TODO update the JSON string below
json = "{}"
# create an instance of CycleStep from a JSON string
cycle_step_instance = CycleStep.from_json(json)
# print the JSON string representation of the object
print(CycleStep.to_json())

# convert the object into a dict
cycle_step_dict = cycle_step_instance.to_dict()
# create an instance of CycleStep from a dict
cycle_step_from_dict = CycleStep.from_dict(cycle_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


