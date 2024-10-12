# NotificationRules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**notification_rules** | [**List[NotificationRule]**](NotificationRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_rules import NotificationRules

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRules from a JSON string
notification_rules_instance = NotificationRules.from_json(json)
# print the JSON string representation of the object
print(NotificationRules.to_json())

# convert the object into a dict
notification_rules_dict = notification_rules_instance.to_dict()
# create an instance of NotificationRules from a dict
notification_rules_from_dict = NotificationRules.from_dict(notification_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


