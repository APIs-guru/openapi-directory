# GoogleCloudChannelV1alpha1SubscriberEvent

Represents information which resellers will get as part of notification from Pub/Sub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner_event** | [**GoogleCloudChannelV1alpha1ChannelPartnerEvent**](GoogleCloudChannelV1alpha1ChannelPartnerEvent.md) |  | [optional] 
**customer_event** | [**GoogleCloudChannelV1alpha1CustomerEvent**](GoogleCloudChannelV1alpha1CustomerEvent.md) |  | [optional] 
**entitlement_event** | [**GoogleCloudChannelV1alpha1EntitlementEvent**](GoogleCloudChannelV1alpha1EntitlementEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_subscriber_event import GoogleCloudChannelV1alpha1SubscriberEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1SubscriberEvent from a JSON string
google_cloud_channel_v1alpha1_subscriber_event_instance = GoogleCloudChannelV1alpha1SubscriberEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1SubscriberEvent.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_subscriber_event_dict = google_cloud_channel_v1alpha1_subscriber_event_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1SubscriberEvent from a dict
google_cloud_channel_v1alpha1_subscriber_event_from_dict = GoogleCloudChannelV1alpha1SubscriberEvent.from_dict(google_cloud_channel_v1alpha1_subscriber_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


