# FeedbackProperties

The properties of the feedback queue for cloud-to-device messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lock_duration_as_iso8601** | **str** | The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | [optional] 
**max_delivery_count** | **int** | The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | [optional] 
**ttl_as_iso8601** | **str** | The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. | [optional] 

## Example

```python
from openapi_client.models.feedback_properties import FeedbackProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackProperties from a JSON string
feedback_properties_instance = FeedbackProperties.from_json(json)
# print the JSON string representation of the object
print(FeedbackProperties.to_json())

# convert the object into a dict
feedback_properties_dict = feedback_properties_instance.to_dict()
# create an instance of FeedbackProperties from a dict
feedback_properties_from_dict = FeedbackProperties.from_dict(feedback_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


