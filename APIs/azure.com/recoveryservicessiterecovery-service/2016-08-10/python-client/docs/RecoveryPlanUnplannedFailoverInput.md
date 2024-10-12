# RecoveryPlanUnplannedFailoverInput

Recovery plan unplanned failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPlanUnplannedFailoverInputProperties**](RecoveryPlanUnplannedFailoverInputProperties.md) |  | 

## Example

```python
from openapi_client.models.recovery_plan_unplanned_failover_input import RecoveryPlanUnplannedFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanUnplannedFailoverInput from a JSON string
recovery_plan_unplanned_failover_input_instance = RecoveryPlanUnplannedFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanUnplannedFailoverInput.to_json())

# convert the object into a dict
recovery_plan_unplanned_failover_input_dict = recovery_plan_unplanned_failover_input_instance.to_dict()
# create an instance of RecoveryPlanUnplannedFailoverInput from a dict
recovery_plan_unplanned_failover_input_from_dict = RecoveryPlanUnplannedFailoverInput.from_dict(recovery_plan_unplanned_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


