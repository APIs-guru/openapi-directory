# CreateRecoveryPlanInputProperties

Recovery plan creation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_deployment_model** | **str** | The failover deployment model. | [optional] 
**groups** | [**List[RecoveryPlanGroup]**](RecoveryPlanGroup.md) | The recovery plan groups. | 
**primary_fabric_id** | **str** | The primary fabric Id. | 
**recovery_fabric_id** | **str** | The recovery fabric Id. | 

## Example

```python
from openapi_client.models.create_recovery_plan_input_properties import CreateRecoveryPlanInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateRecoveryPlanInputProperties from a JSON string
create_recovery_plan_input_properties_instance = CreateRecoveryPlanInputProperties.from_json(json)
# print the JSON string representation of the object
print(CreateRecoveryPlanInputProperties.to_json())

# convert the object into a dict
create_recovery_plan_input_properties_dict = create_recovery_plan_input_properties_instance.to_dict()
# create an instance of CreateRecoveryPlanInputProperties from a dict
create_recovery_plan_input_properties_from_dict = CreateRecoveryPlanInputProperties.from_dict(create_recovery_plan_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


