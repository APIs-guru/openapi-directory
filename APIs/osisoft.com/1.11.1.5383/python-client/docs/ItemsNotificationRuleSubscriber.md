# ItemsNotificationRuleSubscriber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NotificationRuleSubscriber]**](NotificationRuleSubscriber.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_notification_rule_subscriber import ItemsNotificationRuleSubscriber

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsNotificationRuleSubscriber from a JSON string
items_notification_rule_subscriber_instance = ItemsNotificationRuleSubscriber.from_json(json)
# print the JSON string representation of the object
print(ItemsNotificationRuleSubscriber.to_json())

# convert the object into a dict
items_notification_rule_subscriber_dict = items_notification_rule_subscriber_instance.to_dict()
# create an instance of ItemsNotificationRuleSubscriber from a dict
items_notification_rule_subscriber_from_dict = ItemsNotificationRuleSubscriber.from_dict(items_notification_rule_subscriber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


