# RecoveryPlanProperties

Recovery plan custom details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_operations** | **List[str]** | The list of allowed operations. | [optional] 
**current_scenario** | [**CurrentScenarioDetails**](CurrentScenarioDetails.md) |  | [optional] 
**current_scenario_status** | **str** | The recovery plan status. | [optional] 
**current_scenario_status_description** | **str** | The recovery plan status description. | [optional] 
**failover_deployment_model** | **str** | The failover deployment model. | [optional] 
**friendly_name** | **str** | The friendly name. | [optional] 
**groups** | [**List[RecoveryPlanGroup]**](RecoveryPlanGroup.md) | The recovery plan groups. | [optional] 
**last_planned_failover_time** | **datetime** | The start time of the last planned failover. | [optional] 
**last_test_failover_time** | **datetime** | The start time of the last test failover. | [optional] 
**last_unplanned_failover_time** | **datetime** | The start time of the last unplanned failover. | [optional] 
**primary_fabric_friendly_name** | **str** | The primary fabric friendly name. | [optional] 
**primary_fabric_id** | **str** | The primary fabric Id. | [optional] 
**recovery_fabric_friendly_name** | **str** | The recovery fabric friendly name. | [optional] 
**recovery_fabric_id** | **str** | The recovery fabric Id. | [optional] 
**replication_providers** | **List[str]** | The list of replication providers. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_properties import RecoveryPlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanProperties from a JSON string
recovery_plan_properties_instance = RecoveryPlanProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanProperties.to_json())

# convert the object into a dict
recovery_plan_properties_dict = recovery_plan_properties_instance.to_dict()
# create an instance of RecoveryPlanProperties from a dict
recovery_plan_properties_from_dict = RecoveryPlanProperties.from_dict(recovery_plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


