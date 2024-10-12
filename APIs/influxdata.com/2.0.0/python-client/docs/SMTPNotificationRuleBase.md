# SMTPNotificationRuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_template** | **str** |  | [optional] 
**subject_template** | **str** |  | 
**to** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.smtp_notification_rule_base import SMTPNotificationRuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of SMTPNotificationRuleBase from a JSON string
smtp_notification_rule_base_instance = SMTPNotificationRuleBase.from_json(json)
# print the JSON string representation of the object
print(SMTPNotificationRuleBase.to_json())

# convert the object into a dict
smtp_notification_rule_base_dict = smtp_notification_rule_base_instance.to_dict()
# create an instance of SMTPNotificationRuleBase from a dict
smtp_notification_rule_base_from_dict = SMTPNotificationRuleBase.from_dict(smtp_notification_rule_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


