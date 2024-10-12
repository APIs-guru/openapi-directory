# ActionGroup

An Azure action group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_runbook_receivers** | [**List[AutomationRunbookReceiver]**](AutomationRunbookReceiver.md) | The list of AutomationRunbook receivers that are part of this action group. | [optional] 
**azure_app_push_receivers** | [**List[AzureAppPushReceiver]**](AzureAppPushReceiver.md) | The list of AzureAppPush receivers that are part of this action group. | [optional] 
**azure_function_receivers** | [**List[AzureFunctionReceiver]**](AzureFunctionReceiver.md) | The list of azure function receivers that are part of this action group. | [optional] 
**email_receivers** | [**List[EmailReceiver]**](EmailReceiver.md) | The list of email receivers that are part of this action group. | [optional] 
**enabled** | **bool** | Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. | [default to True]
**group_short_name** | **str** | The short name of the action group. This will be used in SMS messages. | 
**itsm_receivers** | [**List[ItsmReceiver]**](ItsmReceiver.md) | The list of ITSM receivers that are part of this action group. | [optional] 
**logic_app_receivers** | [**List[LogicAppReceiver]**](LogicAppReceiver.md) | The list of logic app receivers that are part of this action group. | [optional] 
**sms_receivers** | [**List[SmsReceiver]**](SmsReceiver.md) | The list of SMS receivers that are part of this action group. | [optional] 
**voice_receivers** | [**List[VoiceReceiver]**](VoiceReceiver.md) | The list of voice receivers that are part of this action group. | [optional] 
**webhook_receivers** | [**List[WebhookReceiver]**](WebhookReceiver.md) | The list of webhook receivers that are part of this action group. | [optional] 

## Example

```python
from openapi_client.models.action_group import ActionGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ActionGroup from a JSON string
action_group_instance = ActionGroup.from_json(json)
# print the JSON string representation of the object
print(ActionGroup.to_json())

# convert the object into a dict
action_group_dict = action_group_instance.to_dict()
# create an instance of ActionGroup from a dict
action_group_from_dict = ActionGroup.from_dict(action_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


