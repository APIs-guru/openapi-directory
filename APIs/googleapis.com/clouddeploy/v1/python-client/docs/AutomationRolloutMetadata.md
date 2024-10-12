# AutomationRolloutMetadata

AutomationRolloutMetadata contains Automation-related actions that were performed on a rollout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_automation_runs** | **List[str]** | Output only. The IDs of the AutomationRuns initiated by an advance rollout rule. | [optional] [readonly] 
**current_repair_automation_run** | **str** | Output only. The current AutomationRun repairing the rollout. | [optional] [readonly] 
**promote_automation_run** | **str** | Output only. The ID of the AutomationRun initiated by a promote release rule. | [optional] [readonly] 
**repair_automation_runs** | **List[str]** | Output only. The IDs of the AutomationRuns initiated by a repair rollout rule. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automation_rollout_metadata import AutomationRolloutMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRolloutMetadata from a JSON string
automation_rollout_metadata_instance = AutomationRolloutMetadata.from_json(json)
# print the JSON string representation of the object
print(AutomationRolloutMetadata.to_json())

# convert the object into a dict
automation_rollout_metadata_dict = automation_rollout_metadata_instance.to_dict()
# create an instance of AutomationRolloutMetadata from a dict
automation_rollout_metadata_from_dict = AutomationRolloutMetadata.from_dict(automation_rollout_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


