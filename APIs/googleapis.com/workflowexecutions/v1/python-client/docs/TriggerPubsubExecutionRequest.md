# TriggerPubsubExecutionRequest

Request for the TriggerPubsubExecution method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_cloud_events_mode** | **str** | Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers. | [optional] 
**delivery_attempt** | **int** | The number of attempts that have been made to deliver this message. This is set by Pub/Sub for subscriptions that have the \&quot;dead letter\&quot; feature enabled, and hence provided here for compatibility, but is ignored by Workflows. | [optional] 
**message** | [**PubsubMessage**](PubsubMessage.md) |  | [optional] 
**subscription** | **str** | Required. The subscription of the Pub/Sub push notification. Format: projects/{project}/subscriptions/{sub} | [optional] 

## Example

```python
from openapi_client.models.trigger_pubsub_execution_request import TriggerPubsubExecutionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerPubsubExecutionRequest from a JSON string
trigger_pubsub_execution_request_instance = TriggerPubsubExecutionRequest.from_json(json)
# print the JSON string representation of the object
print(TriggerPubsubExecutionRequest.to_json())

# convert the object into a dict
trigger_pubsub_execution_request_dict = trigger_pubsub_execution_request_instance.to_dict()
# create an instance of TriggerPubsubExecutionRequest from a dict
trigger_pubsub_execution_request_from_dict = TriggerPubsubExecutionRequest.from_dict(trigger_pubsub_execution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


