# SlackNotificationRuleBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** |  | [optional] 
**message_template** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.slack_notification_rule_base import SlackNotificationRuleBase

# TODO update the JSON string below
json = "{}"
# create an instance of SlackNotificationRuleBase from a JSON string
slack_notification_rule_base_instance = SlackNotificationRuleBase.from_json(json)
# print the JSON string representation of the object
print(SlackNotificationRuleBase.to_json())

# convert the object into a dict
slack_notification_rule_base_dict = slack_notification_rule_base_instance.to_dict()
# create an instance of SlackNotificationRuleBase from a dict
slack_notification_rule_base_from_dict = SlackNotificationRuleBase.from_dict(slack_notification_rule_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


