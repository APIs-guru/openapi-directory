# NotificationRuleUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_rule_update import NotificationRuleUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRuleUpdate from a JSON string
notification_rule_update_instance = NotificationRuleUpdate.from_json(json)
# print the JSON string representation of the object
print(NotificationRuleUpdate.to_json())

# convert the object into a dict
notification_rule_update_dict = notification_rule_update_instance.to_dict()
# create an instance of NotificationRuleUpdate from a dict
notification_rule_update_from_dict = NotificationRuleUpdate.from_dict(notification_rule_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


