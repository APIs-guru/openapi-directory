# RecoveryPlanPlannedFailoverInputProperties

Recovery plan planned failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | The failover direction. | 
**provider_specific_details** | [**List[RecoveryPlanProviderSpecificFailoverInput]**](RecoveryPlanProviderSpecificFailoverInput.md) | The provider specific properties. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_planned_failover_input_properties import RecoveryPlanPlannedFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanPlannedFailoverInputProperties from a JSON string
recovery_plan_planned_failover_input_properties_instance = RecoveryPlanPlannedFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanPlannedFailoverInputProperties.to_json())

# convert the object into a dict
recovery_plan_planned_failover_input_properties_dict = recovery_plan_planned_failover_input_properties_instance.to_dict()
# create an instance of RecoveryPlanPlannedFailoverInputProperties from a dict
recovery_plan_planned_failover_input_properties_from_dict = RecoveryPlanPlannedFailoverInputProperties.from_dict(recovery_plan_planned_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


