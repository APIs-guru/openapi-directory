# GoogleCloudChannelV1alpha1ChannelPartnerEvent

Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner** | **str** | Resource name for the Channel Partner Link. Channel_partner uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id} | [optional] 
**event_type** | **str** | Type of event performed on the Channel Partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_channel_partner_event import GoogleCloudChannelV1alpha1ChannelPartnerEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1ChannelPartnerEvent from a JSON string
google_cloud_channel_v1alpha1_channel_partner_event_instance = GoogleCloudChannelV1alpha1ChannelPartnerEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1ChannelPartnerEvent.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_channel_partner_event_dict = google_cloud_channel_v1alpha1_channel_partner_event_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1ChannelPartnerEvent from a dict
google_cloud_channel_v1alpha1_channel_partner_event_from_dict = GoogleCloudChannelV1alpha1ChannelPartnerEvent.from_dict(google_cloud_channel_v1alpha1_channel_partner_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


