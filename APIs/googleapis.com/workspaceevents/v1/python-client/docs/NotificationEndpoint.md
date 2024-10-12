# NotificationEndpoint

The endpoint where the subscription delivers events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubsub_topic** | **str** | Immutable. The Cloud Pub/Sub topic that receives events for the subscription. Format: &#x60;projects/{project}/topics/{topic}&#x60; You must create the topic in the same Google Cloud project where you create this subscription. When the topic receives events, the events are encoded as Cloud Pub/Sub messages. For details, see the [Google Cloud Pub/Sub Protocol Binding for CloudEvents](https://github.com/googleapis/google-cloudevents/blob/main/docs/spec/pubsub.md). | [optional] 

## Example

```python
from openapi_client.models.notification_endpoint import NotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpoint from a JSON string
notification_endpoint_instance = NotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpoint.to_json())

# convert the object into a dict
notification_endpoint_dict = notification_endpoint_instance.to_dict()
# create an instance of NotificationEndpoint from a dict
notification_endpoint_from_dict = NotificationEndpoint.from_dict(notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


