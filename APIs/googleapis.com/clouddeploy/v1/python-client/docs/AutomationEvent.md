# AutomationEvent

Payload proto for \"clouddeploy.googleapis.com/automation\" Platform Log event that describes the Automation related events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation** | **str** | The name of the &#x60;AutomationRun&#x60;. | [optional] 
**message** | **str** | Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.automation_event import AutomationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationEvent from a JSON string
automation_event_instance = AutomationEvent.from_json(json)
# print the JSON string representation of the object
print(AutomationEvent.to_json())

# convert the object into a dict
automation_event_dict = automation_event_instance.to_dict()
# create an instance of AutomationEvent from a dict
automation_event_from_dict = AutomationEvent.from_dict(automation_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


