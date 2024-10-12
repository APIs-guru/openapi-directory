# RecoveryPlanUnplannedFailoverInputProperties

Recovery plan unplanned failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | The failover direction. | 
**provider_specific_details** | [**List[RecoveryPlanProviderSpecificFailoverInput]**](RecoveryPlanProviderSpecificFailoverInput.md) | The provider specific properties. | [optional] 
**source_site_operations** | **str** | A value indicating whether source site operations are required. | 

## Example

```python
from openapi_client.models.recovery_plan_unplanned_failover_input_properties import RecoveryPlanUnplannedFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanUnplannedFailoverInputProperties from a JSON string
recovery_plan_unplanned_failover_input_properties_instance = RecoveryPlanUnplannedFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanUnplannedFailoverInputProperties.to_json())

# convert the object into a dict
recovery_plan_unplanned_failover_input_properties_dict = recovery_plan_unplanned_failover_input_properties_instance.to_dict()
# create an instance of RecoveryPlanUnplannedFailoverInputProperties from a dict
recovery_plan_unplanned_failover_input_properties_from_dict = RecoveryPlanUnplannedFailoverInputProperties.from_dict(recovery_plan_unplanned_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


