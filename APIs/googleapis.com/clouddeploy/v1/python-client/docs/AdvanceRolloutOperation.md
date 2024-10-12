# AdvanceRolloutOperation

Contains the information of an automated advance-rollout operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_phase** | **str** | Output only. The phase the rollout will be advanced to. | [optional] [readonly] 
**rollout** | **str** | Output only. The name of the rollout that initiates the &#x60;AutomationRun&#x60;. | [optional] [readonly] 
**source_phase** | **str** | Output only. The phase of a deployment that initiated the operation. | [optional] [readonly] 
**wait** | **str** | Output only. How long the operation will be paused. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advance_rollout_operation import AdvanceRolloutOperation

# TODO update the JSON string below
json = "{}"
# create an instance of AdvanceRolloutOperation from a JSON string
advance_rollout_operation_instance = AdvanceRolloutOperation.from_json(json)
# print the JSON string representation of the object
print(AdvanceRolloutOperation.to_json())

# convert the object into a dict
advance_rollout_operation_dict = advance_rollout_operation_instance.to_dict()
# create an instance of AdvanceRolloutOperation from a dict
advance_rollout_operation_from_dict = AdvanceRolloutOperation.from_dict(advance_rollout_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


