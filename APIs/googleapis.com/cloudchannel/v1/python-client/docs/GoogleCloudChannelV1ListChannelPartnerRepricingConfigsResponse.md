# GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse

Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_partner_repricing_configs** | [**List[GoogleCloudChannelV1ChannelPartnerRepricingConfig]**](GoogleCloudChannelV1ChannelPartnerRepricingConfig.md) | The repricing configs for this channel partner. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_channel_partner_repricing_configs_response import GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse from a JSON string
google_cloud_channel_v1_list_channel_partner_repricing_configs_response_instance = GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_channel_partner_repricing_configs_response_dict = google_cloud_channel_v1_list_channel_partner_repricing_configs_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse from a dict
google_cloud_channel_v1_list_channel_partner_repricing_configs_response_from_dict = GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse.from_dict(google_cloud_channel_v1_list_channel_partner_repricing_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


