# RepairRolloutRule

The `RepairRolloutRule` automation rule will automatically repair a failed `Rollout`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**AutomationRuleCondition**](AutomationRuleCondition.md) |  | [optional] 
**id** | **str** | Required. ID of the rule. This id must be unique in the &#x60;Automation&#x60; resource to which this rule belongs. The format is &#x60;a-z{0,62}&#x60;. | [optional] 
**jobs** | **List[str]** | Optional. Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in &#x60;source_phase&#x60;. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: &#x60;^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$&#x60;. | [optional] 
**repair_modes** | [**List[RepairMode]**](RepairMode.md) | Required. Defines the types of automatic repair actions for failed jobs. | [optional] 
**source_phases** | **List[str]** | Optional. Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: &#x60;^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$&#x60;. | [optional] 

## Example

```python
from openapi_client.models.repair_rollout_rule import RepairRolloutRule

# TODO update the JSON string below
json = "{}"
# create an instance of RepairRolloutRule from a JSON string
repair_rollout_rule_instance = RepairRolloutRule.from_json(json)
# print the JSON string representation of the object
print(RepairRolloutRule.to_json())

# convert the object into a dict
repair_rollout_rule_dict = repair_rollout_rule_instance.to_dict()
# create an instance of RepairRolloutRule from a dict
repair_rollout_rule_from_dict = RepairRolloutRule.from_dict(repair_rollout_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


