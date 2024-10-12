# RecoveryPlanTestFailoverCleanupInputProperties

Recovery plan test failover cleanup input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | The test failover cleanup comments. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_test_failover_cleanup_input_properties import RecoveryPlanTestFailoverCleanupInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanTestFailoverCleanupInputProperties from a JSON string
recovery_plan_test_failover_cleanup_input_properties_instance = RecoveryPlanTestFailoverCleanupInputProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanTestFailoverCleanupInputProperties.to_json())

# convert the object into a dict
recovery_plan_test_failover_cleanup_input_properties_dict = recovery_plan_test_failover_cleanup_input_properties_instance.to_dict()
# create an instance of RecoveryPlanTestFailoverCleanupInputProperties from a dict
recovery_plan_test_failover_cleanup_input_properties_from_dict = RecoveryPlanTestFailoverCleanupInputProperties.from_dict(recovery_plan_test_failover_cleanup_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


