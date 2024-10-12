# RecoveryPlanPlannedFailoverInput

Recovery plan planned failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPlanPlannedFailoverInputProperties**](RecoveryPlanPlannedFailoverInputProperties.md) |  | 

## Example

```python
from openapi_client.models.recovery_plan_planned_failover_input import RecoveryPlanPlannedFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanPlannedFailoverInput from a JSON string
recovery_plan_planned_failover_input_instance = RecoveryPlanPlannedFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanPlannedFailoverInput.to_json())

# convert the object into a dict
recovery_plan_planned_failover_input_dict = recovery_plan_planned_failover_input_instance.to_dict()
# create an instance of RecoveryPlanPlannedFailoverInput from a dict
recovery_plan_planned_failover_input_from_dict = RecoveryPlanPlannedFailoverInput.from_dict(recovery_plan_planned_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


