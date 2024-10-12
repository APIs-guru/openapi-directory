# RuleWebhookAction

Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. | [optional] 
**service_uri** | **str** | the service uri to Post the notification when the alert activates or resolves. | [optional] 

## Example

```python
from openapi_client.models.rule_webhook_action import RuleWebhookAction

# TODO update the JSON string below
json = "{}"
# create an instance of RuleWebhookAction from a JSON string
rule_webhook_action_instance = RuleWebhookAction.from_json(json)
# print the JSON string representation of the object
print(RuleWebhookAction.to_json())

# convert the object into a dict
rule_webhook_action_dict = rule_webhook_action_instance.to_dict()
# create an instance of RuleWebhookAction from a dict
rule_webhook_action_from_dict = RuleWebhookAction.from_dict(rule_webhook_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


