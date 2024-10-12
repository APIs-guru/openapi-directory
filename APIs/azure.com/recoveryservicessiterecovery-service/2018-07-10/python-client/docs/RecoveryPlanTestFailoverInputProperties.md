# RecoveryPlanTestFailoverInputProperties

Recovery plan test failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | The failover direction. | 
**network_id** | **str** | The Id of the network to be used for test failover. | [optional] 
**network_type** | **str** | The network type to be used for test failover. | 
**provider_specific_details** | [**List[RecoveryPlanProviderSpecificFailoverInput]**](RecoveryPlanProviderSpecificFailoverInput.md) | The provider specific properties. | [optional] 
**skip_test_failover_cleanup** | **str** | A value indicating whether the test failover cleanup is to be skipped. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_test_failover_input_properties import RecoveryPlanTestFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanTestFailoverInputProperties from a JSON string
recovery_plan_test_failover_input_properties_instance = RecoveryPlanTestFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanTestFailoverInputProperties.to_json())

# convert the object into a dict
recovery_plan_test_failover_input_properties_dict = recovery_plan_test_failover_input_properties_instance.to_dict()
# create an instance of RecoveryPlanTestFailoverInputProperties from a dict
recovery_plan_test_failover_input_properties_from_dict = RecoveryPlanTestFailoverInputProperties.from_dict(recovery_plan_test_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


