# GoogleCloudChannelV1ListChannelPartnerLinksResponse

Response message for CloudChannelService.ListChannelPartnerLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner_links** | [**List[GoogleCloudChannelV1ChannelPartnerLink]**](GoogleCloudChannelV1ChannelPartnerLink.md) | The Channel partner links for a reseller. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_channel_partner_links_response import GoogleCloudChannelV1ListChannelPartnerLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListChannelPartnerLinksResponse from a JSON string
google_cloud_channel_v1_list_channel_partner_links_response_instance = GoogleCloudChannelV1ListChannelPartnerLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListChannelPartnerLinksResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_channel_partner_links_response_dict = google_cloud_channel_v1_list_channel_partner_links_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListChannelPartnerLinksResponse from a dict
google_cloud_channel_v1_list_channel_partner_links_response_from_dict = GoogleCloudChannelV1ListChannelPartnerLinksResponse.from_dict(google_cloud_channel_v1_list_channel_partner_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


