# NotificationRuleTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_names** | **List[str]** |  | [optional] 
**criteria** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**multi_trigger_event_option** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nonrepetition_interval** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**resend_interval** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**template_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_rule_template import NotificationRuleTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRuleTemplate from a JSON string
notification_rule_template_instance = NotificationRuleTemplate.from_json(json)
# print the JSON string representation of the object
print(NotificationRuleTemplate.to_json())

# convert the object into a dict
notification_rule_template_dict = notification_rule_template_instance.to_dict()
# create an instance of NotificationRuleTemplate from a dict
notification_rule_template_from_dict = NotificationRuleTemplate.from_dict(notification_rule_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


