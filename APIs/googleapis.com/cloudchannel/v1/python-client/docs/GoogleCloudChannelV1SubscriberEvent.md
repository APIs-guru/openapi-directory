# GoogleCloudChannelV1SubscriberEvent

Represents information which resellers will get as part of notification from Pub/Sub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_event** | [**GoogleCloudChannelV1CustomerEvent**](GoogleCloudChannelV1CustomerEvent.md) |  | [optional] 
**entitlement_event** | [**GoogleCloudChannelV1EntitlementEvent**](GoogleCloudChannelV1EntitlementEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_subscriber_event import GoogleCloudChannelV1SubscriberEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1SubscriberEvent from a JSON string
google_cloud_channel_v1_subscriber_event_instance = GoogleCloudChannelV1SubscriberEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1SubscriberEvent.to_json())

# convert the object into a dict
google_cloud_channel_v1_subscriber_event_dict = google_cloud_channel_v1_subscriber_event_instance.to_dict()
# create an instance of GoogleCloudChannelV1SubscriberEvent from a dict
google_cloud_channel_v1_subscriber_event_from_dict = GoogleCloudChannelV1SubscriberEvent.from_dict(google_cloud_channel_v1_subscriber_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


