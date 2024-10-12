# AutomationActionEventHub

The target Event Hub to which event data will be exported. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | The target Event Hub connection string (it will not be included in any response). | [optional] 
**event_hub_resource_id** | **str** | The target Event Hub Azure Resource ID. | [optional] 
**sas_policy_name** | **str** | The target Event Hub SAS policy name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.automation_action_event_hub import AutomationActionEventHub

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationActionEventHub from a JSON string
automation_action_event_hub_instance = AutomationActionEventHub.from_json(json)
# print the JSON string representation of the object
print(AutomationActionEventHub.to_json())

# convert the object into a dict
automation_action_event_hub_dict = automation_action_event_hub_instance.to_dict()
# create an instance of AutomationActionEventHub from a dict
automation_action_event_hub_from_dict = AutomationActionEventHub.from_dict(automation_action_event_hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


