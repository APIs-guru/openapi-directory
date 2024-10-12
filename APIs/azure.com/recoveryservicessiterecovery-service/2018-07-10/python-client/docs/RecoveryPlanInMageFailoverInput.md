# RecoveryPlanInMageFailoverInput

Recovery plan InMage failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_type** | **str** | The recovery point type. | 

## Example

```python
from openapi_client.models.recovery_plan_in_mage_failover_input import RecoveryPlanInMageFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanInMageFailoverInput from a JSON string
recovery_plan_in_mage_failover_input_instance = RecoveryPlanInMageFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanInMageFailoverInput.to_json())

# convert the object into a dict
recovery_plan_in_mage_failover_input_dict = recovery_plan_in_mage_failover_input_instance.to_dict()
# create an instance of RecoveryPlanInMageFailoverInput from a dict
recovery_plan_in_mage_failover_input_from_dict = RecoveryPlanInMageFailoverInput.from_dict(recovery_plan_in_mage_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


