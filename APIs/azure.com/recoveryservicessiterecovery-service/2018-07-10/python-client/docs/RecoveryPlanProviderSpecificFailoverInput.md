# RecoveryPlanProviderSpecificFailoverInput

Recovery plan provider specific failover input base class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_provider_specific_failover_input import RecoveryPlanProviderSpecificFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanProviderSpecificFailoverInput from a JSON string
recovery_plan_provider_specific_failover_input_instance = RecoveryPlanProviderSpecificFailoverInput.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanProviderSpecificFailoverInput.to_json())

# convert the object into a dict
recovery_plan_provider_specific_failover_input_dict = recovery_plan_provider_specific_failover_input_instance.to_dict()
# create an instance of RecoveryPlanProviderSpecificFailoverInput from a dict
recovery_plan_provider_specific_failover_input_from_dict = RecoveryPlanProviderSpecificFailoverInput.from_dict(recovery_plan_provider_specific_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


