# ItemsNotificationRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[NotificationRule]**](NotificationRule.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_notification_rule import ItemsNotificationRule

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsNotificationRule from a JSON string
items_notification_rule_instance = ItemsNotificationRule.from_json(json)
# print the JSON string representation of the object
print(ItemsNotificationRule.to_json())

# convert the object into a dict
items_notification_rule_dict = items_notification_rule_instance.to_dict()
# create an instance of ItemsNotificationRule from a dict
items_notification_rule_from_dict = ItemsNotificationRule.from_dict(items_notification_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


