# RecoveryPlanA2AFailoverInput

Recovery plan A2A failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_service_creation_option** | **str** | A value indicating whether to use recovery cloud service for TFO or not. | [optional] 
**recovery_point_type** | **str** | The recovery point type. | 

## Example

```python
from openapi_client.models.recovery_plan_a2_a_failover_input import RecoveryPlanA2AFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanA2AFailoverInput from a JSON string
recovery_plan_a2_a_failover_input_instance = RecoveryPlanA2AFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanA2AFailoverInput.to_json())

# convert the object into a dict
recovery_plan_a2_a_failover_input_dict = recovery_plan_a2_a_failover_input_instance.to_dict()
# create an instance of RecoveryPlanA2AFailoverInput from a dict
recovery_plan_a2_a_failover_input_from_dict = RecoveryPlanA2AFailoverInput.from_dict(recovery_plan_a2_a_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


