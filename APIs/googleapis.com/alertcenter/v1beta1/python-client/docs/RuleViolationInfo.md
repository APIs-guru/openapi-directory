# RuleViolationInfo

Common alert information about violated rules that are configured by Google Workspace administrators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | **str** | Source of the data. | [optional] 
**match_info** | [**List[MatchInfo]**](MatchInfo.md) | List of matches that were found in the resource content. | [optional] 
**recipients** | **List[str]** | Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or &#39;anyone&#39; if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to. | [optional] 
**resource_info** | [**ResourceInfo**](ResourceInfo.md) |  | [optional] 
**rule_info** | [**RuleInfo**](RuleInfo.md) |  | [optional] 
**suppressed_action_types** | **List[str]** | Actions suppressed due to other actions with higher priority. | [optional] 
**trigger** | **str** | Trigger of the rule. | [optional] 
**triggered_action_info** | **List[object]** | Metadata related to the triggered actions. | [optional] 
**triggered_action_types** | **List[str]** | Actions applied as a consequence of the rule being triggered. | [optional] 
**triggering_user_email** | **str** | Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan. | [optional] 

## Example

```python
from openapi_client.models.rule_violation_info import RuleViolationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RuleViolationInfo from a JSON string
rule_violation_info_instance = RuleViolationInfo.from_json(json)
# print the JSON string representation of the object
print(RuleViolationInfo.to_json())

# convert the object into a dict
rule_violation_info_dict = rule_violation_info_instance.to_dict()
# create an instance of RuleViolationInfo from a dict
rule_violation_info_from_dict = RuleViolationInfo.from_dict(rule_violation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


