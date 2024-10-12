# SMTPNotificationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the notification rule. | [optional] 
**endpoint_id** | **str** |  | 
**every** | **str** | The notification repetition interval. | [optional] 
**id** | **str** |  | [optional] [readonly] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**last_run_error** | **str** |  | [optional] [readonly] 
**last_run_status** | **str** |  | [optional] [readonly] 
**latest_completed** | **datetime** | Timestamp of latest scheduled, completed run, RFC3339. | [optional] [readonly] 
**limit** | **int** | Don&#39;t notify me more than &amp;lt;limit&amp;gt; times every &amp;lt;limitEvery&amp;gt; seconds. If set, limitEvery cannot be empty. | [optional] 
**limit_every** | **int** | Don&#39;t notify me more than &amp;lt;limit&amp;gt; times every &amp;lt;limitEvery&amp;gt; seconds. If set, limit cannot be empty. | [optional] 
**links** | [**NotificationRuleBaseLinks**](NotificationRuleBaseLinks.md) |  | [optional] 
**name** | **str** | Human-readable name describing the notification rule. | 
**offset** | **str** | Duration to delay after the schedule, before executing check. | [optional] 
**org_id** | **str** | The ID of the organization that owns this notification rule. | 
**owner_id** | **str** | The ID of creator used to create this notification rule. | [optional] [readonly] 
**runbook_link** | **str** |  | [optional] 
**sleep_until** | **str** |  | [optional] 
**status** | [**TaskStatusType**](TaskStatusType.md) |  | 
**status_rules** | [**List[StatusRule]**](StatusRule.md) | List of status rules the notification rule attempts to match. | 
**tag_rules** | [**List[TagRule]**](TagRule.md) | List of tag rules the notification rule attempts to match. | [optional] 
**task_id** | **str** | The ID of the task associated with this notification rule. | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**body_template** | **str** |  | [optional] 
**subject_template** | **str** |  | 
**to** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.smtp_notification_rule import SMTPNotificationRule

# TODO update the JSON string below
json = "{}"
# create an instance of SMTPNotificationRule from a JSON string
smtp_notification_rule_instance = SMTPNotificationRule.from_json(json)
# print the JSON string representation of the object
print(SMTPNotificationRule.to_json())

# convert the object into a dict
smtp_notification_rule_dict = smtp_notification_rule_instance.to_dict()
# create an instance of SMTPNotificationRule from a dict
smtp_notification_rule_from_dict = SMTPNotificationRule.from_dict(smtp_notification_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


