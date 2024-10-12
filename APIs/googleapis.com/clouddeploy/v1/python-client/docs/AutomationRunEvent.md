# AutomationRunEvent

Payload proto for \"clouddeploy.googleapis.com/automation_run\" Platform Log event that describes the AutomationRun related events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_id** | **str** | Identifier of the &#x60;Automation&#x60;. | [optional] 
**automation_run** | **str** | The name of the &#x60;AutomationRun&#x60;. | [optional] 
**destination_target_id** | **str** | ID of the &#x60;Target&#x60; to which the &#x60;AutomationRun&#x60; is created. | [optional] 
**message** | **str** | Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**rule_id** | **str** | Identifier of the &#x60;Automation&#x60; rule. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.automation_run_event import AutomationRunEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRunEvent from a JSON string
automation_run_event_instance = AutomationRunEvent.from_json(json)
# print the JSON string representation of the object
print(AutomationRunEvent.to_json())

# convert the object into a dict
automation_run_event_dict = automation_run_event_instance.to_dict()
# create an instance of AutomationRunEvent from a dict
automation_run_event_from_dict = AutomationRunEvent.from_dict(automation_run_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


