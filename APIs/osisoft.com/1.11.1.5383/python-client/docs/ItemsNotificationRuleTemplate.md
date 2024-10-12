# ItemsNotificationRuleTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NotificationRuleTemplate]**](NotificationRuleTemplate.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_notification_rule_template import ItemsNotificationRuleTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsNotificationRuleTemplate from a JSON string
items_notification_rule_template_instance = ItemsNotificationRuleTemplate.from_json(json)
# print the JSON string representation of the object
print(ItemsNotificationRuleTemplate.to_json())

# convert the object into a dict
items_notification_rule_template_dict = items_notification_rule_template_instance.to_dict()
# create an instance of ItemsNotificationRuleTemplate from a dict
items_notification_rule_template_from_dict = ItemsNotificationRuleTemplate.from_dict(items_notification_rule_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


