# RecoveryPlanTestFailoverInput

Recovery plan test failover input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryPlanTestFailoverInputProperties**](RecoveryPlanTestFailoverInputProperties.md) |  | 

## Example

```python
from openapi_client.models.recovery_plan_test_failover_input import RecoveryPlanTestFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanTestFailoverInput from a JSON string
recovery_plan_test_failover_input_instance = RecoveryPlanTestFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanTestFailoverInput.to_json())

# convert the object into a dict
recovery_plan_test_failover_input_dict = recovery_plan_test_failover_input_instance.to_dict()
# create an instance of RecoveryPlanTestFailoverInput from a dict
recovery_plan_test_failover_input_from_dict = RecoveryPlanTestFailoverInput.from_dict(recovery_plan_test_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


