# GoogleCloudChannelV1ChannelPartnerLink

Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner_cloud_identity_info** | [**GoogleCloudChannelV1CloudIdentityInfo**](GoogleCloudChannelV1CloudIdentityInfo.md) |  | [optional] 
**create_time** | **str** | Output only. Timestamp of when the channel partner link is created. | [optional] [readonly] 
**invite_link_uri** | **str** | Output only. URI of the web page where partner accepts the link invitation. | [optional] [readonly] 
**link_state** | **str** | Required. State of the channel partner link. | [optional] 
**name** | **str** | Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}. | [optional] [readonly] 
**public_id** | **str** | Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination. | [optional] [readonly] 
**reseller_cloud_identity_id** | **str** | Required. Cloud Identity ID of the linked reseller. | [optional] 
**update_time** | **str** | Output only. Timestamp of when the channel partner link is updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_channel_partner_link import GoogleCloudChannelV1ChannelPartnerLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ChannelPartnerLink from a JSON string
google_cloud_channel_v1_channel_partner_link_instance = GoogleCloudChannelV1ChannelPartnerLink.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ChannelPartnerLink.to_json())

# convert the object into a dict
google_cloud_channel_v1_channel_partner_link_dict = google_cloud_channel_v1_channel_partner_link_instance.to_dict()
# create an instance of GoogleCloudChannelV1ChannelPartnerLink from a dict
google_cloud_channel_v1_channel_partner_link_from_dict = GoogleCloudChannelV1ChannelPartnerLink.from_dict(google_cloud_channel_v1_channel_partner_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


