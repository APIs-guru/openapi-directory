# GoogleCloudChannelV1UpdateChannelPartnerLinkRequest

Request message for CloudChannelService.UpdateChannelPartnerLink

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner_link** | [**GoogleCloudChannelV1ChannelPartnerLink**](GoogleCloudChannelV1ChannelPartnerLink.md) |  | [optional] 
**update_mask** | **str** | Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_update_channel_partner_link_request import GoogleCloudChannelV1UpdateChannelPartnerLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1UpdateChannelPartnerLinkRequest from a JSON string
google_cloud_channel_v1_update_channel_partner_link_request_instance = GoogleCloudChannelV1UpdateChannelPartnerLinkRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1UpdateChannelPartnerLinkRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_update_channel_partner_link_request_dict = google_cloud_channel_v1_update_channel_partner_link_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1UpdateChannelPartnerLinkRequest from a dict
google_cloud_channel_v1_update_channel_partner_link_request_from_dict = GoogleCloudChannelV1UpdateChannelPartnerLinkRequest.from_dict(google_cloud_channel_v1_update_channel_partner_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


