# RuleEmailAction

Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_emails** | **List[str]** | the list of administrator&#39;s custom email addresses to notify of the activation of the alert. | [optional] 
**send_to_service_owners** | **bool** | Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated. | [optional] 

## Example

```python
from openapi_client.models.rule_email_action import RuleEmailAction

# TODO update the JSON string below
json = "{}"
# create an instance of RuleEmailAction from a JSON string
rule_email_action_instance = RuleEmailAction.from_json(json)
# print the JSON string representation of the object
print(RuleEmailAction.to_json())

# convert the object into a dict
rule_email_action_dict = rule_email_action_instance.to_dict()
# create an instance of RuleEmailAction from a dict
rule_email_action_from_dict = RuleEmailAction.from_dict(rule_email_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


