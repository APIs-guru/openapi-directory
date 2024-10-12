# AutomationRunbookTaskDetails

This class represents the task details for an automation runbook.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The automation account name of the runbook. | [optional] 
**cloud_service_name** | **str** | The cloud service of the automation runbook account. | [optional] 
**is_primary_side_script** | **bool** | A value indicating whether it is a primary side script or not. | [optional] 
**job_id** | **str** | The job Id of the runbook execution. | [optional] 
**job_output** | **str** | The execution output of the runbook. | [optional] 
**name** | **str** | The recovery plan task name. | [optional] 
**runbook_id** | **str** | The runbook Id. | [optional] 
**runbook_name** | **str** | The runbook name. | [optional] 
**subscription_id** | **str** | The subscription Id of the automation runbook account. | [optional] 

## Example

```python
from openapi_client.models.automation_runbook_task_details import AutomationRunbookTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRunbookTaskDetails from a JSON string
automation_runbook_task_details_instance = AutomationRunbookTaskDetails.from_json(json)
# print the JSON string representation of the object
print(AutomationRunbookTaskDetails.to_json())

# convert the object into a dict
automation_runbook_task_details_dict = automation_runbook_task_details_instance.to_dict()
# create an instance of AutomationRunbookTaskDetails from a dict
automation_runbook_task_details_from_dict = AutomationRunbookTaskDetails.from_dict(automation_runbook_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


