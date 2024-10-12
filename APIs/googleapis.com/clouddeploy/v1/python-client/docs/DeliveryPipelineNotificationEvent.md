# DeliveryPipelineNotificationEvent

Payload proto for \"clouddeploy.googleapis.com/deliverypipeline_notification\" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_pipeline** | **str** | The name of the &#x60;Delivery Pipeline&#x60;. | [optional] 
**message** | **str** | Debug message for when a notification fails to send. | [optional] 
**pipeline_uid** | **str** | Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] 
**type** | **str** | Type of this notification, e.g. for a Pub/Sub failure. | [optional] 

## Example

```python
from openapi_client.models.delivery_pipeline_notification_event import DeliveryPipelineNotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryPipelineNotificationEvent from a JSON string
delivery_pipeline_notification_event_instance = DeliveryPipelineNotificationEvent.from_json(json)
# print the JSON string representation of the object
print(DeliveryPipelineNotificationEvent.to_json())

# convert the object into a dict
delivery_pipeline_notification_event_dict = delivery_pipeline_notification_event_instance.to_dict()
# create an instance of DeliveryPipelineNotificationEvent from a dict
delivery_pipeline_notification_event_from_dict = DeliveryPipelineNotificationEvent.from_dict(delivery_pipeline_notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


