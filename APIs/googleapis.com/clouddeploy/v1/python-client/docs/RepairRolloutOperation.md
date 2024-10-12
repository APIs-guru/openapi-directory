# RepairRolloutOperation

Contains the information for an automated `repair rollout` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_repair_mode_index** | **str** | Output only. The index of the current repair action in the repair sequence. | [optional] [readonly] 
**job_id** | **str** | Output only. The job ID for the Job to repair. | [optional] [readonly] 
**phase_id** | **str** | Output only. The phase ID of the phase that includes the job being repaired. | [optional] [readonly] 
**repair_phases** | [**List[RepairPhase]**](RepairPhase.md) | Output only. Records of the repair attempts. Each repair phase may have multiple retry attempts or single rollback attempt. | [optional] [readonly] 
**rollout** | **str** | Output only. The name of the rollout that initiates the &#x60;AutomationRun&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.repair_rollout_operation import RepairRolloutOperation

# TODO update the JSON string below
json = "{}"
# create an instance of RepairRolloutOperation from a JSON string
repair_rollout_operation_instance = RepairRolloutOperation.from_json(json)
# print the JSON string representation of the object
print(RepairRolloutOperation.to_json())

# convert the object into a dict
repair_rollout_operation_dict = repair_rollout_operation_instance.to_dict()
# create an instance of RepairRolloutOperation from a dict
repair_rollout_operation_from_dict = RepairRolloutOperation.from_dict(repair_rollout_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


