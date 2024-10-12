# PagerDutyNotificationRuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_template** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.pager_duty_notification_rule_base import PagerDutyNotificationRuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of PagerDutyNotificationRuleBase from a JSON string
pager_duty_notification_rule_base_instance = PagerDutyNotificationRuleBase.from_json(json)
# print the JSON string representation of the object
print(PagerDutyNotificationRuleBase.to_json())

# convert the object into a dict
pager_duty_notification_rule_base_dict = pager_duty_notification_rule_base_instance.to_dict()
# create an instance of PagerDutyNotificationRuleBase from a dict
pager_duty_notification_rule_base_from_dict = PagerDutyNotificationRuleBase.from_dict(pager_duty_notification_rule_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


