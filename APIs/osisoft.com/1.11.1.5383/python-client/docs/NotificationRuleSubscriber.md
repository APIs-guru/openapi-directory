# NotificationRuleSubscriber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_string** | **str** |  | [optional] 
**contact_template_name** | **str** |  | [optional] 
**contact_type** | **str** |  | [optional] 
**delivery_format_name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**escalation_timeout** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**maximum_retries** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**notify_option** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**plug_in_name** | **str** |  | [optional] 
**retry_interval** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_rule_subscriber import NotificationRuleSubscriber

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRuleSubscriber from a JSON string
notification_rule_subscriber_instance = NotificationRuleSubscriber.from_json(json)
# print the JSON string representation of the object
print(NotificationRuleSubscriber.to_json())

# convert the object into a dict
notification_rule_subscriber_dict = notification_rule_subscriber_instance.to_dict()
# create an instance of NotificationRuleSubscriber from a dict
notification_rule_subscriber_from_dict = NotificationRuleSubscriber.from_dict(notification_rule_subscriber_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


