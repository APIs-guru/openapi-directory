# AutomationRunbookReceiver

The Azure Automation Runbook notification receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_account_id** | **str** | The Azure automation account Id which holds this runbook and authenticate to Azure resource. | 
**is_global_runbook** | **bool** | Indicates whether this instance is global runbook. | 
**name** | **str** | Indicates name of the webhook. | [optional] 
**runbook_name** | **str** | The name for this runbook. | 
**service_uri** | **str** | The URI where webhooks should be sent. | [optional] 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 
**webhook_resource_id** | **str** | The resource id for webhook linked to this runbook. | 

## Example

```python
from openapi_client.models.automation_runbook_receiver import AutomationRunbookReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRunbookReceiver from a JSON string
automation_runbook_receiver_instance = AutomationRunbookReceiver.from_json(json)
# print the JSON string representation of the object
print(AutomationRunbookReceiver.to_json())

# convert the object into a dict
automation_runbook_receiver_dict = automation_runbook_receiver_instance.to_dict()
# create an instance of AutomationRunbookReceiver from a dict
automation_runbook_receiver_from_dict = AutomationRunbookReceiver.from_dict(automation_runbook_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


