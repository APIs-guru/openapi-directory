# RecoveryPlanAutomationRunbookActionDetails

Recovery plan Automation runbook action details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_location** | **str** | The fabric location. | 
**runbook_id** | **str** | The runbook ARM Id. | [optional] 
**timeout** | **str** | The runbook timeout. | [optional] 

## Example

```python
from openapi_client.models.recovery_plan_automation_runbook_action_details import RecoveryPlanAutomationRunbookActionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryPlanAutomationRunbookActionDetails from a JSON string
recovery_plan_automation_runbook_action_details_instance = RecoveryPlanAutomationRunbookActionDetails.from_json(json)
# print the JSON string representation of the object
print(RecoveryPlanAutomationRunbookActionDetails.to_json())

# convert the object into a dict
recovery_plan_automation_runbook_action_details_dict = recovery_plan_automation_runbook_action_details_instance.to_dict()
# create an instance of RecoveryPlanAutomationRunbookActionDetails from a dict
recovery_plan_automation_runbook_action_details_from_dict = RecoveryPlanAutomationRunbookActionDetails.from_dict(recovery_plan_automation_runbook_action_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


