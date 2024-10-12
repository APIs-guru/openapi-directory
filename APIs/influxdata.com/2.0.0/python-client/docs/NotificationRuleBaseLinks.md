# NotificationRuleBaseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**query** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_rule_base_links import NotificationRuleBaseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRuleBaseLinks from a JSON string
notification_rule_base_links_instance = NotificationRuleBaseLinks.from_json(json)
# print the JSON string representation of the object
print(NotificationRuleBaseLinks.to_json())

# convert the object into a dict
notification_rule_base_links_dict = notification_rule_base_links_instance.to_dict()
# create an instance of NotificationRuleBaseLinks from a dict
notification_rule_base_links_from_dict = NotificationRuleBaseLinks.from_dict(notification_rule_base_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


