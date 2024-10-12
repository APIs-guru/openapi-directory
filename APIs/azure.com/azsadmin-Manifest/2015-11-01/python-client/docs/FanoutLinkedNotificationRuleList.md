# FanoutLinkedNotificationRuleList

List of the linked notification rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[FanoutLinkedNotificationRule]**](FanoutLinkedNotificationRule.md) | List of the linked notification rules. | [optional] 

## Example

```python
from openapi_client.models.fanout_linked_notification_rule_list import FanoutLinkedNotificationRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of FanoutLinkedNotificationRuleList from a JSON string
fanout_linked_notification_rule_list_instance = FanoutLinkedNotificationRuleList.from_json(json)
# print the JSON string representation of the object
print(FanoutLinkedNotificationRuleList.to_json())

# convert the object into a dict
fanout_linked_notification_rule_list_dict = fanout_linked_notification_rule_list_instance.to_dict()
# create an instance of FanoutLinkedNotificationRuleList from a dict
fanout_linked_notification_rule_list_from_dict = FanoutLinkedNotificationRuleList.from_dict(fanout_linked_notification_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


