# FanoutLinkedNotificationRule

The fan-out linked notification rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The list of actions. | [optional] 
**endpoints** | [**ResourceProviderEndpointList**](ResourceProviderEndpointList.md) |  | [optional] 

## Example

```python
from openapi_client.models.fanout_linked_notification_rule import FanoutLinkedNotificationRule

# TODO update the JSON string below
json = "{}"
# create an instance of FanoutLinkedNotificationRule from a JSON string
fanout_linked_notification_rule_instance = FanoutLinkedNotificationRule.from_json(json)
# print the JSON string representation of the object
print(FanoutLinkedNotificationRule.to_json())

# convert the object into a dict
fanout_linked_notification_rule_dict = fanout_linked_notification_rule_instance.to_dict()
# create an instance of FanoutLinkedNotificationRule from a dict
fanout_linked_notification_rule_from_dict = FanoutLinkedNotificationRule.from_dict(fanout_linked_notification_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


