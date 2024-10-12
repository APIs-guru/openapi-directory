# LinkedNotificationRule

The linked notification rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | List of actions. | [optional] 

## Example

```python
from openapi_client.models.linked_notification_rule import LinkedNotificationRule

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedNotificationRule from a JSON string
linked_notification_rule_instance = LinkedNotificationRule.from_json(json)
# print the JSON string representation of the object
print(LinkedNotificationRule.to_json())

# convert the object into a dict
linked_notification_rule_dict = linked_notification_rule_instance.to_dict()
# create an instance of LinkedNotificationRule from a dict
linked_notification_rule_from_dict = LinkedNotificationRule.from_dict(linked_notification_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


