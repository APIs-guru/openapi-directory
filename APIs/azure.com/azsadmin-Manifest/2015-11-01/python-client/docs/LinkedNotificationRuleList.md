# LinkedNotificationRuleList

List of the linked notification rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[LinkedNotificationRule]**](LinkedNotificationRule.md) | List of the linked notification rules. | [optional] 

## Example

```python
from openapi_client.models.linked_notification_rule_list import LinkedNotificationRuleList

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedNotificationRuleList from a JSON string
linked_notification_rule_list_instance = LinkedNotificationRuleList.from_json(json)
# print the JSON string representation of the object
print(LinkedNotificationRuleList.to_json())

# convert the object into a dict
linked_notification_rule_list_dict = linked_notification_rule_list_instance.to_dict()
# create an instance of LinkedNotificationRuleList from a dict
linked_notification_rule_list_from_dict = LinkedNotificationRuleList.from_dict(linked_notification_rule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


